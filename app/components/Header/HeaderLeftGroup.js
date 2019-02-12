import React from 'react'
import { View } from 'react-native'
import { HeaderLogo } from './HeaderLogo'
import { HeaderSearch } from './HeaderSearch'

class HeaderLeftGroup extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HeaderLogo />
        <HeaderSearch />
      </View>
    )
  }
}
export { HeaderLeftGroup }
