import React, { Component } from 'react'
import {
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from 'styles'

class RectTextInput extends Component {
  render() {
    const {
      autoCapitalize, autoCorrect, editable, error, icon, iconPressEnabled,
      inputRef, keyboardType, onChangeText, onIconPress, onSubmitEditing,
      placeholder, returnKeyType, secureTextEntry, selectTextOnFocus,
      style, textInputStyle, iconStyle, iconContainerStyle, iconSource,
      testID, valid, value, isIconActive, multiline, placeholderTextColor,
      blurOnSubmit,
    } = this.props;
    return (
      <View style={styles.containerStyle}>
        <TextInput
          multiline={multiline}
          ref={inputRef}
          testID={testID}
          style={[ styles.input, textInputStyle ]}
          value={value}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoCorrect={autoCorrect}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          blurOnSubmit={blurOnSubmit}
        />
      </View>
    )
  }
}

export { RectTextInput }
