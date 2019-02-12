
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, G, Path, Polyline, Rect } from 'react-native-svg'

class SearchIcon extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
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
              d="M60 60L48 48"
              stroke="#808080"
              fill="none"
              strokeWidth="3"
             />
             <Circle
               cx="26"
               cy="26"
               r="24"
             />
             <Path
               stroke="#808080"
               fill="none"
               strokeWidth="3"
               d="M10.5 22C12 16.4 16.4 12 22 10.5"
             />
            </G>
        </Svg>
      </View>
    );
  }
}
export { SearchIcon }


//<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="svgTitle" id="Search" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" class="Icon__InlineSVG-yn9d63-0 hEVshp"><title id="svgTitle">Search</title><g class="SVGComponents__GWithStroke-sc-1l4vknh-0 ghmCZn"><path d="M60 60L48 48"></path><circle cx="26" cy="26" r="24"></circle><path d="M10.5 22C12 16.4 16.4 12 22 10.5" class="SVGComponents__PathWithStroke-sc-1l4vknh-4 camwZm"></path></g></svg>
