import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { RectTextInput } from 'components/RectTextInput'
import { SaveDraftStoreUI } from 'components/SaveDraftStoreUI'
import { colors } from 'styles'

export class MakeAPostScreen extends React.Component {
  cancelPost = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.whiteTwo, height: 50, shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><TouchableOpacity onPress={this.cancelPost}><Text style={{ color: colors.primaryBlue }}>Cancel</Text></TouchableOpacity></View>
        <View style={{ flex: 2.5, alignItems: 'center' }}><Text>Compose Your Uniqueness</Text></View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><TouchableOpacity onPress={this.cancelPost}><Text>Publish</Text></TouchableOpacity></View>
        </View>
        <View>
          <RectTextInput
            placeholder={`TITLE (OPTIONAL)`}
            containerStyle={{ paddingVertical: 20, paddingHorizontal: 30, minHeight: 100 }}
            textInputStyle={{ fontSize: 20 }}
          />
          <RectTextInput
            placeholder={`Manifest your thoughts here..`}
            containerStyle={{ paddingHorizontal: 30, justifyContent: 'flex-start', alignItems: 'flex-start'}}
            textInputStyle={{ fontSize: 14, justifyContent: 'flex-start', alignItems: 'flex-start', paddingBottom: 70 }}
          />
        </View>
        <SaveDraftStoreUI />
      </View>
    )
  }
}
