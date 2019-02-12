import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { RectTextInput } from 'components/RectTextInput'

class HeaderSearch extends React.Component {
  render() {
    const {
      onPress,
    } = this.props;
    return (
      <View style={{flex: 1, marginHorizontal: 9, alignItems: 'center', justifyContent: 'center'}}>
        <RectTextInput
            placeholder={`EXPLORE`} />
      </View>
    )
  }
}

export {
  HeaderSearch
}
