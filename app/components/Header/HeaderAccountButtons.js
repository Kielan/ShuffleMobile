import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { GiftsIcon, NotificationsIcon, SearchIcon } from 'components/SvgIcons'
import { styles } from 'styles'

class HeaderAccountButtons extends React.Component {
  onPressInvites = () => {
    console.log('onPressInvites');
//    manager.navigateToRoute(RouteName.CareTeamProfile);
  }
  onPressNotifications = () => {
    console.log('onPressNotifications');
//    manager.navigateToRoute(RouteName.CareTeamProfile);
  }
  onPressProfile = () => {
    console.log('onTeamProfilePress');
//    manager.navigateToRoute(RouteName.CareTeamProfile);
  }
  render() {
    const {
     onPress,
    } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={this.onPressInvites}
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
      >
      <View style={{ height: 24, width: 24 }}>
        <GiftsIcon height={24} width={24} />
      </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity
        onPress={this.onPressNotifications}
        style={{ alignItems: 'center' }}
      >
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', borderLeftColor: '#C3C3C3', borderRightColor: '#C3C3C3', underlayColor: "#ffffff", paddingHorizontal: 14, marginHorizontal: 14, borderLeftWidth: StyleSheet.hairlineWidth, borderRightWidth: StyleSheet.hairlineWidth}}>
        <View style={{ height: 24, width: 24 }}>
          <NotificationsIcon height={24} width={24} />
        </View>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{width: 44, height: 44, marginRight: 14}} >
        <TouchableOpacity
          onPress={this.onPressProfile}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
        <View style={{height: 32, width: 32}}>
          <Image
            style={[styles.searchIcon, { height: 32, width: 32, borderRadius: 32/2 }]}
            source={require('assets/kielanshuffle.png')}
          />
        </View>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export {
  HeaderAccountButtons
}
