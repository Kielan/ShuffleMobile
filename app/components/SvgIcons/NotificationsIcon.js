import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, G, Rect, Path,  } from 'react-native-svg'
import { colors } from 'styles'

class NotificationsIcon extends React.Component {
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
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 64 64"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        >
          <G>
          <Path
            stroke={colors.primaryOrange}
            fill={colors.primaryOrange}
            strokeWidth="3"
            d="M26.5 54.5c0 3.3 2.7 6 6 6s6-2.7 6-6"
          />
          <Path
            stroke="#808080"
            fill="none"
            strokeWidth="3"
            d="M50.5 34.5v-12c0-9.8-8.2-18-18-18s-18 8.2-18 18v12c0 10.2-8 20-8 20h52s-8-9.8-8-20z"
          />
          </G>
        </Svg>
      </View>
    );
  }
}

export { NotificationsIcon }
