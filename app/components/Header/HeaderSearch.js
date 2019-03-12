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
      <View style={{flex: 1, marginHorizontal: 9, alignItems: 'center', justifyContent: 'center', paddingTop: this.props.topHeader, backgroundColor: 'transparent', color: 'transparent' }}>
        <RectTextInput
            placeholder={``} />
      </View>
    )
  }
}

export {
  HeaderSearch
}
