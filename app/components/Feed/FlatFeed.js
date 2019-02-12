import React from 'react'
import { smartRender } from 'utils'
import { FeedContext } from 'contexts'
//import { Feed } from './Feed'
import { FlatFeedInner } from './FlatFeedInner'
import { Activity } from './Activity'
import { activities } from 'mock/data'


export class FlatFeed extends React.Component {
  static defaultProps = {
    styles: {},
    feedGroup: 'timeline',
    notify: false,
    Activity: Activity,
  };

  render() {
    console.log('flatfeed outer?', this.props)
    return (
      <React.Fragment>
        <FeedContext.Consumer>
          {feedCtx => {

            console.log('FeedContext.Consumer=>', feedCtx);
            return <FlatFeedInner {...this.props} {...feedCtx} />;
          }}
        </FeedContext.Consumer>
      </React.Fragment>
    )
  }
}
