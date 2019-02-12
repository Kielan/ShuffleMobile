import React from 'react'
import { STREAM_API_KEY, STREAM_API_TOKEN, STREAM_APP_ID } from 'react-native-dotenv'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import stream from 'getstream'
import { FeedManager } from '../Feed'

export const ShuffleContext = React.createContext({
  changedUserData: () => {},
  sharedFeedManagers: {},
})

export class ShuffleApp extends React.Component {
  static defaultProps = {
    sharedFeeds: [
      {
        feedGroup: 'notification',
        notify: true,
        options: { mark_seen: true },
      },
    ],
    defaultUserData: { name: 'Unknown' },
//    errorHandler: handleError,
  };
  static Consumer = function StreamAppConsumer(props) {
    return (
      <ShuffleContext.Consumer>
        {(appCtx) => {
          if (!props.children || !props.children.length) {
            return null;
          }
          console.log('just tell me bro: ', props, appCtx)
        //  if (!appCtx.client || !appCtx.user) {
        //    throw new Error(
        //      'This component should be a child of a StreamApp component',
        //    );
        //  }
          const Child = props.children;
          return Child(appCtx);
        }}
      </ShuffleContext.Consumer>
    );
  }

  constructor(props) {
    super(props);
    this.props = props
    const client = {}
    console.log('shuffleapp client before error?: ', client)

    console.log('shuffleapp client: ', client)
    this.state = {
      client,
      user: client.currentUser,
    }

    for (const feedProps of this.props.sharedFeeds) {
      const manager = new FeedManager({
        ...feedProps,
        ...this.state,
      });
    }
  }
  render() {
    return (
      <ShuffleContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ShuffleContext.Provider>
    );
  }
}
