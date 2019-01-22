import React from 'react'
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { NavigationActions } from 'react-navigation';
import { isEmailValid } from 'utils/str'
import { RoundBtn, RoundBtnTheme } from 'components/Buttons'
import { RectTextInput } from 'components/RectTextInput'
import { RouteNames } from 'navigation';
import { styles } from 'styles'
import { manager } from '../manager'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errText: null,
      emailErr: false,
      passErr: false,
      showPass: false,
      processing: false,
      email: '',
    };
  }

  componentDidMount() {
    this.mounted = true;
    console.log('loginscreenmounted')
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setStateSafe(data) {
    if (this.mounted) {
      this.setState(data);
    }
  }

  onEmailSubmitEditing = () => {
    if (this.passInput) { this.passInput.focus(); }
  }

  onEmailChange = (val) => {
    this.resetErr();
//    const email = val ? val.replace(/\s/g, '') : val;
//    this.setStateSafe({ email });
  }

  onPassChange = (val) => {
    this.resetErr();
    const password = val ? val.replace(/\s/g, '') : val;
    this.setStateSafe({ password });
  }

  onEmailInputRef = (el) => {
    if (el) {
      this.emailInput = el;
    }
  }

  onPassInputRef = (el) => {
    if (el) {
      this.passInput = el;
    }
  }

  onSubmitPress = () => {

//    manager.ui.setLastEmail(email);
    this.props.navigation.navigate('App');
    console.log('kielan onsubmit press', this.props.navigation)

//    return manager.signIn()//this.state.email, this.state.password
  }

  render() {
    const {
      email = '', password, errText, emailErr,
      passErr, showPass, processing,
    } = this.state;
    return (
      <View style={{ backgroundColor: 'red' }}>
        <View style={styles.form}>
          <RectTextInput
            testID="emailInput"
            inputRef={this.onEmailInputRef}
            style={{marginTop: 10}}
            placeholder="Email"
            autoCorrect={false}
            valid={isEmailValid(email)}
            onChangeText={this.onEmailChange}
            value={'email'}
            error={emailErr}
            keyboardType="email-address"
            returnKeyType="next"
            editable={!processing}
            onSubmitEditing={this.onEmailSubmitEditing}
            blurOnSubmit={false}
          />
          <TextInput
            testID="passInput"
            inputRef={this.onPassInputRef}
            icon="password"
            style={{marginTop: 10}}
            placeholder="Password"
            autoCorrect={false}
            valid={password.length > 0}
            secureTextEntry={!showPass}
            iconPressEnabled={true}
            value={password}
            error={passErr}
            returnKeyType="done"
            editable={!processing}
            onChangeText={this.onPassChange}
          />
        </View>
      <RoundBtn
        testID="submitBtn"
        title="Log in"
        theme={RoundBtnTheme.Green}
        style={{ width: 250 }}
        loading={processing}
        onPress={this.onSubmitPress}
      />
      </View>
    )
  }
}

export { LoginScreen }
