import {
  Platform,
} from 'react-native'

export class FeedManager {
  constructor(props) {
    this.props = props;
    this.registeredCallbacks = [];
    this.state = {
      activityOrder: [],
  //    activities: immutable.Map(),
      activityIdToPath: {},
      activityIdToPaths: {},
      reactionIdToPaths: {},
      reactionActivities: {},
      lastResponse: null,
    }
  }
  register(callback) {
    this.registeredCallbacks.push(callback);
  //  this.subscribe();
  }
  unregister(callback) {
    this.registeredCallbacks.splice(this.registeredCallbacks.indexOf(callback));
    this.unsubscribe();
  }

  doFeedRequest = async (options) => {
    const requestWasSentAt = Date.now();
    let response;

    if (this.props.doFeedRequest) {
      response = await this.props.doFeedRequest(
        this.props.client,
        this.props.feedGroup,
        this.props.userId,
        options,
      );
    } else {
      response = await this.feed().get(options);
    }
    if (Platform.OS === 'ios') {
      // Workaround for this issue: https://github.com/facebook/react-native/issues/5839
      const requestTime = Date.now() - requestWasSentAt;
      const MINIMUM_TIME_BETWEEN_REFRESHING_PROP_UPDATES = 350;
      const waitTime =
        MINIMUM_TIME_BETWEEN_REFRESHING_PROP_UPDATES - requestTime;
      if (waitTime > 0) {
        await sleep(waitTime);
      }
    }
    return response;
  };

  feed = () => this.props.client.feed(this.props.feedGroup, "1");

  hasNextPage = () => {
    const lastResponse = this.state.lastResponse;
    return Boolean(lastResponse && lastResponse.next);
  };

  hasReverseNextPage = () => {
    const { lastReverseResponse } = this.state;
    return Boolean(lastReverseResponse && lastReverseResponse.next);
  }

  subscribe = async () => {

  }
}
