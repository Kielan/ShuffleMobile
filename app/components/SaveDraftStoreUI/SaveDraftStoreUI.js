import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { colors } from 'styles'

export class SaveDraftStoreUI extends React.Component {
  render() {
    return (
      <View style={{ position: 'absolute', right: 50, bottom: 5 }}>
        <Text style={{ color: colors.whiteFive }}>saving...</Text>
      </View>
    )
  }
}
