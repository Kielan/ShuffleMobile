import React from 'react'
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { InterestList } from 'components/InterestList'

export class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>kielan lemons</Text>
        </View>
        <View>
          <Text>portland</Text>
        </View>
        <View>
          <Text>early adopter</Text>
        </View>
        <View>
          <Text>I like making, nowadays mostly  javascripty things, I try to bridge javascript to other things so I can say I do other things also.</Text>
        </View>
        <View>
          <InterestList />
        </View>
      </View>
    )
  }
}
