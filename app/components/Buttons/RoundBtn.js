import React, { PureComponent } from 'react';
import {
  Text, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { styles } from 'styles'

export const RoundBtnTheme = {
  Green: 'green',
  Gray: 'gray',
  White: 'white',
  OutlineGreen: 'outlineGreen',
  Transparent: 'transparent',
}

class RoundBtn extends PureComponent {
  onPress = () => {
    const { onPress, loading } = this.props;
    if (!loading) {
      onPress();
    }
  }
  render() {
    const {
      testID, title, style, textStyle, disabled = false, loading, theme,
    } = this.props;
    return (
      <TouchableOpacity
        testID={testID}
        style={styles.RoundBtnStyle}
        onPress={this.onPress}
        disabled={disabled}
      >
        {!loading ? (
          <Text style={styles.BtnTextStyle}>
            {title}
          </Text>
        ) : (
          <ActivityIndicator
            color={colors.white}
          />
        )}
      </TouchableOpacity>
    )
  }
}

export { RoundBtn }
