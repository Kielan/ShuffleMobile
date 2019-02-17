import React from 'react'
import { View } from 'react-native'
import { HeaderLogo } from './HeaderLogo'
import { HeaderSearch } from './HeaderSearch'
import { styles, colors } from 'styles'

class HeaderLeftGroup extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{ backgroundColor: colors.primaryOrange, paddingTop: this.props.topHeader }}><HeaderLogo /></View>
      </View>
    )
  }
}
export { HeaderLeftGroup }
