import React from 'react'
import {
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { RoundBtn } from 'components/Buttons'
import { colors } from 'styles'

class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  login = () => {
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{minHeight: 60}}></View>
        <View style={{flex: 1}}>
            <Text style={{ color: colors.primaryOrange, fontSize: 52, textAlign: 'center' }}>shuffle</Text>
            <Text style={{ color: colors.whiteFour, fontSize: 16, textAlign: 'center' }}>community for what you do</Text>
          <View style={{flex: 1, maxwidth: Dimensions.get('window').width, maxHeight: 500}}><Image
            style={{
              flex: 1,
              resizeMode: 'contain',
               width: Dimensions.get('window').width,
               height: 500
            }}
            source={require('assets/launchscreenimage.jpg')}
          /></View>
        </View>
        <Text style={{color: colors.primaryOrange, fontSize: 18 }}>shuffle is currently invite only</Text>
        <Text>members can invite you, or you can request an invite here.</Text>
        <RoundBtn title={'login'} onPress={this.login} style={{ width: 250 }}/>
        <View style={{backgroundColor: colors.shadowGrey}}>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>about us</Text>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>interest genome</Text>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>team</Text>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>mission & values</Text>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>commnity guidelines</Text>
        <Text style={{color: colors.greyTwo, fontSize: 16, textAlign: 'center', marginTop: 8, paddingTop: 8, textTransform: 'uppercase'}}>credits</Text>
        </View>
      </View>
    )
  }
}

export { LandingScreen }
