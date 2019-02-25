import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RectTextInput } from 'components/RectTextInput'

export class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RectTextInput />
      </View>
    )
  }
}
