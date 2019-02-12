import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { styles, colors } from 'styles'

class HeaderLogo extends React.Component {
  render() {
    const {
     onPress,
    } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: colors.primaryOrange, color: colors.primaryOrange, width: 44, height: 44 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
      <Text style={[styles.logoTextStyle, { color: colors.whiteOne, fontSize: 18 }]}>{`S`}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export {
  HeaderLogo
}
