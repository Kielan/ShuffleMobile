import React from 'react'
import { View } from 'react-native'
import { HeaderLogo } from './HeaderLogo'
import { HeaderSearch } from './HeaderSearch'
import { styles, colors } from 'styles'

class HeaderLeftGroup extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'transparent', color: 'transparent', flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'transparent', color: 'transparent', paddingTop: this.props.topHeader }}>
          <HeaderLogo {...this.props} />
        </View>
      </View>
    )
  }
}
export { HeaderLeftGroup }
