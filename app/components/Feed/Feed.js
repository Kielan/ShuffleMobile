import React from 'react'
import { FeedContext } from 'contexts'
import { FeedManager } from './FeedManager'

export class Feed extends React.Component {
  constructor(props) {
    super(props)
//    const feedId = props.client.feed(props.feedGroup, props.userId).id
//    let manager = props.sharedFeedManagers[feedId]

    const manager = new FeedManager(props)

    this.state = {
      manager: manager,
    };
  }
  boundForceUpdate = () => this.forceUpdate();
  componentDidMount() {
    return this.state.manager.register(this.boundForceUpdate);
  }
  getCtx = () => {
    const { manager } = this.state;
    const state = manager.state;
    return {
      getActivityPath: manager.getActivityPath,
      onToggleReaction: manager.onToggleReaction,
      onAddReaction: manager.onAddReaction,
      onRemoveReaction: manager.onRemoveReaction,
      onToggleChildReaction: manager.onToggleChildReaction,
      onAddChildReaction: manager.onAddChildReaction,
      onRemoveChildReaction: manager.onRemoveChildReaction,
      onRemoveActivity: manager.onRemoveActivity,
      refresh: manager.refresh,
      refreshUnreadUnseen: manager.refreshUnreadUnseen,
      loadNextReactions: manager.loadNextReactions,
      loadNextPage: manager.loadNextPage,
      hasNextPage: manager.hasNextPage(),
      loadReverseNextPage: manager.loadReverseNextPage,
      hasReverseNextPage: manager.hasReverseNextPage(),
      feedGroup: this.props.feedGroup,
      userId: this.props.userId,
      activityOrder: state.activityOrder,
      activities: state.activities,
      realtimeAdds: state.realtimeAdds,
      realtimeDeletes: state.realtimeDeletes,
      refreshing: state.refreshing,
      unread: state.unread,
      unseen: state.unseen,
    };
  };

  render() {
    console.log('hello feed Inner?')
    return (
      <FeedContext.Provider value={this.getCtx()}>
        {this.props.children}
      </FeedContext.Provider>
    );
  }
}
