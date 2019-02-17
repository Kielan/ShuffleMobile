import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { RectTextInput } from 'components/RectTextInput'
import { colors } from 'styles'

export class MakeAPostScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.greyTwo, height: 40 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><TouchableOpacity><Text>Cancel</Text></TouchableOpacity></View>
        <View style={{ flex: 2.5, alignItems: 'center' }}><Text>Compose Your Uniqueness</Text></View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Publish</Text></View>
        </View>
        <View>
          <RectTextInput
            placeholder={`TITLE (OPTIONAL)`}
          />
          <RectTextInput
            placeholder={`Manifest your thoughts here..`}
          />
        </View>
      </View>
    )
  }
}
