import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { G, Path, Polyline, Rect } from 'react-native-svg'
import { colors } from 'styles'

export class ChatBubbleIcon extends React.Component {
  render() {
    const {
      width,
      height,
    } = this.props
    return (
      <View
        style={[
          { alignItems: 'center', justifyContent: 'center' },
          { width: width, height: height },
        ]}>
        <Svg height="100%" width="100%" viewBox="0 0 64 64"
            preserveAspectRatio="xMidYMid meet"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            class="Icon__InlineSVG-yn9d63-0 hEVshp">
            <G
             fill="none"
             strokeWidth="3px"
             stroke="#808080"
             >
            <Path
              strokeWidth="3"
              d="M55,43.8 c4.4-4.3,7-9.8,7-15.8C62,14.4,48.6,4,32,4S2,14.4,2,28c0,13.6,13.4,24.5,30,24.5c2.9,0,5.7-0.4,8.4-1L56,58L55,43.8z"
            />
            </G>
            </Svg>
      </View>
    );
  }
}
