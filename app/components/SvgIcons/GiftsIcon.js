import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { G, Path, Polyline, Rect } from 'react-native-svg'
import { colors } from 'styles'

class GiftsIcon extends React.Component {
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
            <Polyline
              points="56,24 56,60 8,60 8,24"
            />
            <Rect
              x="2"
              y="14"
              width="60"
              height="10"
              stroke="#808080"
              strokeWidth="2"
              fill="white"
            />
            <Path
              stroke={colors.primaryOrange}
              strokeWidth="3"
              d="M14,8 c0-3.314,2.686-6,6-6c8.875,0,12,12,12,12s-8.686,0-12,0S14,11.314,14,8z"
            />
            <Path
              stroke={colors.primaryOrange}
              strokeWidth="3"
              d="M50,8 c0-3.314-2.686-6-6-6c-8.875,0-12,12-12,12s8.686,0,12,0S50,11.314,50,8z"
            />
            <Polyline
              stroke={colors.primaryOrange}
              points=" 38,14 38,60 26,60 26,14"  />
            </G>
            </Svg>
      </View>
    );
  }
}

export { GiftsIcon }

/*

<Svg height="50%" width="50%" viewBox="0 0 64 64"
    preserveAspectRatio="xMidYMid meet"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeMiterlimit="10"
    strokeWidth="3"
    class="Icon__InlineSVG-yn9d63-0 hEVshp">
  <PolyLine
    points="56,24 56,60 8,60 8,24"
  />
  <Rect
    x="2"
    y="14"
    width="60"
    height="10"
    stroke="red"
    strokeWidth="2"
    fill="yellow"
  />
  <Path
    d="M14,8 c0-3.314,2.686-6,6-6c8.875,0,12,12,12,12s-8.686,0-12,0S14,11.314,14,8z"
  />
  <Path
    d="M50,8 c0-3.314-2.686-6-6-6c-8.875,0-12,12-12,12s8.686,0,12,0S50,11.314,50,8z"
  />
  <PolyLine points=" 38,14 38,60 26,60 26,14"  />
</Svg>

*/
