import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { PencilIcon } from 'components/SvgIcons'

export class InterestList extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={{ textTransform: 'uppercase' }}>Farming & agriculture</Text>
          <View>
            <View style={{ height: 24, width: 24 }}>
              <PencilIcon height={24} width={24} />
            </View>
            <Text>complete your summary</Text>
          </View>
        </View>
      </View>
    )
  }
}
