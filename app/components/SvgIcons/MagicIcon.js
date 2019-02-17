import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { G, Path, Line, Rect } from 'react-native-svg'
import { colors } from 'styles'

export class MagicIcon extends React.Component {
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
              d="M62,14 c-2.88-2.88-9.12-2.88-12,0c2.88-2.88,2.88-9.12,0-12c2.88,2.88,9.12,2.88,12,0C59.12,4.88,59.12,11.12,62,14z"
            />
            <Path
              strokeWidth="3"
              d="M60,44 c-1.92-1.92-6.08-1.92-8,0c1.92-1.92,1.92-6.08,0-8c1.92,1.92,6.08,1.92,8,0C58.08,37.92,58.08,42.08,60,44z"
            />
            <Path
              strokeWidth="3"
              d="M60,44 c-1.92-1.92-6.08-1.92-8,0c1.92-1.92,1.92-6.08,0-8c1.92,1.92,6.08,1.92,8,0C58.08,37.92,58.08,42.08,60,44z"
            />
            <Line
              x1="31" y1="24" x2="40" y2="33"
            />
            <Rect x="0.251" y="32.636" width="49.497" height="12.728" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.2548 29.1005)"  />
            </G>
            </Svg>
      </View>
    );
  }
}

//<g class="SVGComponents__GWithStroke-sc-1l4vknh-0 ghmCZn">
//<path d="M62,14 c-2.88-2.88-9.12-2.88-12,0c2.88-2.88,2.88-9.12,0-12c2.88,2.88,9.12,2.88,12,0C59.12,4.88,59.12,11.12,62,14z" class="SVGComponents__PathWithStroke-sc-1l4vknh-4 ifzDUv"></path>
//<path d="M60,44 c-1.92-1.92-6.08-1.92-8,0c1.92-1.92,1.92-6.08,0-8c1.92,1.92,6.08,1.92,8,0C58.08,37.92,58.08,42.08,60,44z" class="SVGComponents__PathWithStroke-sc-1l4vknh-4 ifzDUv"></path>
//<path d="M28,12 c-1.92-1.92-6.08-1.92-8,0c1.92-1.92,1.92-6.08,0-8c1.92,1.92,6.08,1.92,8,0C26.08,5.92,26.08,10.08,28,12z" class="SVGComponents__PathWithStroke-sc-1l4vknh-4 ifzDUv"></path>
//<line x1="31" y1="24" x2="40" y2="33" class="SVGComponents__LineStroke-sc-1l4vknh-7 miKXb"></line>
//<rect x="0.251" y="32.636" width="49.497" height="12.728" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.2548 29.1005)" class="SVGComponents__UnfilledRectange-sc-1l4vknh-10 entWsU"></rect>
//</g>
