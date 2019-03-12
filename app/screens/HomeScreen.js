import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import { Apptentive } from 'utils/analytics'
import { ShuffleApp } from 'components/ShuffleApp'
import { FlatFeed } from 'components/Feed'
import { activities } from 'mock'
import { RoundBtn } from 'components/Buttons'
import { InterestSifter } from 'components/InterestSifter'

class HomeScreen extends React.Component {
  componentDidMount() {
    //Apptentive.engageEvent('kielan_apptentive_alt_home');
  }
  makeAPost = () => {
    this.props.navigation.navigate('Camera')
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <ShuffleApp>
          <InterestSifter />
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30, paddingBottom: 5 }}>
            <RoundBtn title={`make a post`} onPress={this.makeAPost}/>
          </View>
          <FlatFeed activities={activities} />
        </ShuffleApp>
      </View>
    )
  }
}

export { HomeScreen }
