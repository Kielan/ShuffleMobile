import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { G, Path, Line, Rect } from 'react-native-svg'
import { colors } from 'styles'

export class PencilIcon extends React.Component {
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
            <G transform="translate(0.5, 0.5)">
              <Line
                x1="6" y1="44" x2="20" y2="58"
              />
              <Line
                x1="13" y1="51" x2="43" y2="21"
              />
              <Line
                x1="42" y1="8" x2="56" y2="22"
              />
              <Line
                x1="36" y1="14" x2="50" y2="28"
               />
              <Path
                d="M20,58L4,60l2-16L45.2,4.8 c1.6-1.6,4.1-1.6,5.7,0l8.3,8.3c1.6,1.6,1.6,4.1,0,5.7L20,58z"
              />
            </G>
        </Svg>
      </View>
    )
  }
}
