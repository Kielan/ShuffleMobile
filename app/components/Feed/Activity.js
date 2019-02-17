import React from 'react'
import {
  Dimensions,
  Image,
  Linking,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { smartRender } from 'utils'
import { Card } from './Card'
import { UserBar } from './UserBar'
import { Footer } from './Footer'
import { styles } from 'styles'
import { RectTextInput } from 'components/RectTextInput'

export class Activity extends React.Component {
  static defaultProps = {
    Card,
    Footer,
    activityActor: {
      data: {
        name: 'kielan',
        location: 'SF',
        profileImage: require('assets/kielanshuffle.png')
      }
    }
  };

  _getOnPress = () => {
    if (this.props.onPress) {
      return this.props.onPress;
    }
  };

  _getOnPressAvatar = () => {
    if (this.props.activity.actor !== 'NotFound' && this.props.onPressAvatar) {
      return this.props.onPressAvatar;
    }
  };

  renderHeader = () => {
    const { time } = this.props.activity
    const actor = this.props.activityActor
    console.log('activityActor', this.props.activityActor)
    const notFound = {
      id: '!not-found',
      created_at: '',
      updated_at: '',
      data: { name: 'Unknown', profileImage: '' },
    }

    return (
      <View style={[styles.header, { flex: 1 } ]}>
        <UserBar
          username={actor.data.name}
          avatar={actor.data.profileImage}
          subtitle={this.props.sub}
          timestamp={time}
          icon={this.props.icon}
          onPressAvatar={this._getOnPressAvatar()}
        />
      </View>
    );
  };

  renderText = (text, activity) => {
    const tokens = text.split(' ');
    const rendered = [];
    const styles = buildStylesheet('activity', this.props.styles);

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i][0] === '@') {
        rendered.push(
          <Text
            style={styles.mention}
            onPress={() => {
              this.onPressMention(tokens[i], activity);
            }}
            key={i}
          >
            {tokens[i]}{' '}
          </Text>,
        );
      } else if (tokens[i][0] === '#') {
        rendered.push(
          <Text
            style={styles.hashtag}
            onPress={() => {
              this.onPressHashtag(tokens[i], activity);
            }}
            key={i}
          >
            {tokens[i]}{' '}
          </Text>,
        );
      } else if (
        activity.attachments &&
        activity.attachments.og &&
        Object.keys(activity.attachments.og).length > 0 &&
        tokens[i] === activity.attachments.og.url
      ) {
        const url = activity.attachments.og.url;
        rendered.push(
          <Text key={i} onPress={() => Linking.openURL(url)} style={styles.url}>
            {tokens[i].slice(0, 20)}
            {tokens[i].length > 20 ? '...' : ''}{' '}
          </Text>,
        );
      } else {
        rendered.push(tokens[i] + ' ');
      }
    }
    return <Text>{rendered}</Text>;
  }

  renderContent = () => {
    // return null;
    const width =
      this.props.imageWidth != null
        ? this.props.imageWidth
        : Dimensions.get('window').width;
    const { object, image, attachments } = this.props.activity;
    let { text } = this.props.activity;
    const { Card } = this.props;
    if (text === undefined) {
      if (typeof object === 'string') {
        text = object;
      } else {
        text = '';
      }
    }
    text = text.trim();

    return (
      <View style={{
        flex: 1, minHeight: 150,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8
      }}>
        {Boolean(text) && (
          <View style={styles.content}>
            <Text>{this.renderText(text, this.props.activity)}</Text>
          </View>
        )}

        {Boolean(image) && (
          <Image
            style={{ width, height: width }}
            source={{ uri: image }}
            resizeMethod="resize"
          />
        )}

        {attachments &&
          attachments.images &&
          attachments.images.length > 0 && (
            <Image
              style={{ width, height: width }}
              source={{ uri: attachments.images[0] }}
              resizeMethod="resize"
            />
          )}
        {attachments &&
          attachments.og &&
          Object.keys(attachments.og).length > 0 &&
          smartRender(Card, {
            title: attachments.og.title,
            description: attachments.og.description,
            image:
              attachments.og.images && attachments.og.images.length > 0
                ? attachments.og.images[0].image
                : null,
            url: attachments.og.url,
            og: attachments.og,
          })}
      </View>
    );
  };

  renderResponseBar = () => {
    return (
      <View style={{ }}>
        <View>
          <Image />
          <RectTextInput
              placeholder={``} />
        </View>
      </View>
    )
  }

  render() {
    const { Header, Content, Footer } = this.props;
    const { time } = this.props.activity
    const actor = this.props.activityActor
    return (
      <View style={{
              flex: 1, marginTop: 25, shadowColor: '#000',
            shadowOffset: { width: 4, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 3
      }}>
      <TouchableOpacity
        style={[styles.container, { flexDirection: 'column', flex: 1, }]}
        onPress={this._getOnPress()}
        disabled={!this._getOnPress()}
      >
      <UserBar
        username={actor.data.name}
        avatar={actor.data.profileImage}
        subtitle={this.props.sub}
        timestamp={time}
        icon={this.props.icon}
        onPressAvatar={this._getOnPressAvatar()}
      />
      <View style={{
        flex: 1, minHeight: 150,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3
       }}>
        {smartRender(Content, {}, this.renderContent)}
        {smartRender(Footer, {}, this.renderResponseBar)}
      </View>
      </TouchableOpacity>
      </View>
    )
  }
}
