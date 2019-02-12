import React from 'react'
import {
  FlatList,
} from 'react-native'
import { activities } from 'mock'
import { smartRender } from 'utils'
import { Activity } from './Activity'

class ImmutableItemWrapper extends React.PureComponent {
  render() {
    return this.props.renderItem(this.props.item);
  }
}

export class FlatFeedInner extends React.Component {
  defaultProps = {
    activities: activities
  }
  listRef = React.createRef();
  _refresh = async () => {
    this._scrollToTop();
    await this.props.refresh(this.props.options);
    this._scrollToTop();
  }
  _scrollToTop() {
    const ref = this.listRef;
    if (ref && ref.current) {
      ref.current.scrollToOffset({ offset: 0 });
    }
  }
  _childProps = () => ({
    onRemoveActivity: this.props.onRemoveActivity,
    onToggleReaction: this.props.onToggleReaction,
    onAddReaction: this.props.onAddReaction,
    onRemoveReaction: this.props.onRemoveReaction,
    onToggleChildReaction: this.props.onToggleChildReaction,
    onAddChildReaction: this.props.onAddChildReaction,
    onRemoveChildReaction: this.props.onRemoveChildReaction,
    navigation: this.props.navigation,
    feedGroup: this.props.feedGroup,
    userId: this.props.userId,
  });
  _renderWrappedActivity = ({ item }) => {
    return (
      <Activity
        activity={item}
        navigation={this.props.navigation}
        feedGroup={this.props.feedGroup}
        userId={this.props.userId}
        styles={this.props.styles}

      />
    )
  }
  //item: ActivityResponse
  render() {
    console.log('flatFeed data inner: ', this.props.activities)
    let notifierProps = {
      adds: this.props.realtimeAdds,
      deletes: this.props.realtimeDeletes,
      onPress: this._refresh,
    }
    const styles = {
      container: {

      }
    }
    return (
      <React.Fragment>
        <FlatList
            ListHeaderComponent={this.props.children}
            style={[styles.container, { paddingHorizontal: 20, }]}
            refreshing={this.props.refreshing}
            onRefresh={this.props.refresh}
            data={this.props.activities}
            keyExtractor={(item) => item.id}
            renderItem={this._renderWrappedActivity}
            onEndReached={
              this.props.noPagination ? undefined : this.props.loadNextPage
            }
            ref={this.listRef}
            {...this.props.flatListProps}
          />
      </React.Fragment>
    )
  }
}
