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
    const topHeader = 30
    return (
      <View style={{ height: 94, flexDirection: 'row', backgroundColor: colors.whiteOne, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#C3C3C3' }}>
        <HeaderLeftGroup topHeader={30} />
        <HeaderAccountButtons topHeader={30} />
      </View>
    )
  }
}
