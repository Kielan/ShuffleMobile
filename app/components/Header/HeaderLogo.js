import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { styles, colors } from 'styles'

class HeaderLogo extends React.Component {
  render() {
    console.log('HeaderLogo this.props', this.props)
    const {
     onPress,
     styleThemeStage,
    } = this.props

    let backgroundLogoColor;
    let logoTextColor;
//    if(this.props.navigation.state.routes[0].index === 0) {
//      backgroundLogoColor = 'transparent'
//      logoTextColor = colors.greyTwo
//    } else {
      backgroundLogoColor = colors.primaryOrange
      logoTextColor = colors.whiteOne
//    }
    return (
      <View style={[styleThemeStage.logoBackground, { flex: 1, maxWidth: 64, width: 64 }]}>
        <TouchableOpacity
          onPress={onPress}
          style={[styleThemeStage.logoBackground, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}
        >
        <Text style={[styleThemeStage.logoText, styles.logoTextStyle, { color: logoTextColor, fontSize: 18 }]}>{`S`}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export {
  HeaderLogo
}
