import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import { Apptentive } from 'utils/analytics'
import { HeaderLeftGroup, HeaderLogo, HeaderSearch, HeaderAccountButtons } from 'components/Header'
import { ShuffleApp } from 'components/ShuffleApp'
import { FlatFeed } from 'components/Feed'
import { activities } from 'mock'

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerLeft: <HeaderLeftGroup />,
    headerRight: <HeaderAccountButtons />,
  };

  componentDidMount() {
    Apptentive.engageEvent('kielan_apptentive_alt_home');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ShuffleApp>
          <FlatFeed activities={activities} />
        </ShuffleApp>
      </View>
    )
  }
}

export { HomeScreen }
