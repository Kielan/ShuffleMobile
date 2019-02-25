import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { HeaderLeftGroup, HeaderAccountButtons, HeaderLogo, HeaderSearch } from './index'
import { colors } from 'styles'

export class ShuffleHeader extends React.Component {
  render() {
    const topHeader = 10
    //borderBottomWidth: StyleSheet.hairlineWidth,
    return (
      <View style={{ height: 64, flexDirection: 'row', color: 'transparent', backgroundColor: 'transparent', borderBottomColor: '#C3C3C3' }}>
        <HeaderLeftGroup topHeader={topHeader} {...this.props} />
        <HeaderAccountButtons topHeader={topHeader} {...this.props} />
      </View>
    )
  }
}
