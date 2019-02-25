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
  onPressSearch = () => {
    this.props.navigation.navigate('Search');
  }
  onPressNotifications = () => {
    console.log('onPressNotifications');
//    manager.navigateToRoute(RouteName.CareTeamProfile);
  }
  onPressProfile = () => {
    console.log('onTeamProfilePress');
    this.props.navigation.navigate('Profile');
  }
  render() {
    const {
     onPress,
    } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: this.props.topHeader, backgroundColor: 'transparent', color: 'transparent' }}>
      <View style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              borderLeftColor: '#C3C3C3',
              borderRightColor: '#C3C3C3',
            //  underlayColor: "#ffffff",
              paddingHorizontal: 2,
              borderLeftWidth: StyleSheet.hairlineWidth,
              backgroundColor: 'transparent',
              color: 'transparent'
             }}>
        <TouchableOpacity
          onPress={this.onPressSearch}
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ height: 18, width: 18, backgroundColor: 'transparent' }}>
            <SearchIcon height={18} width={18} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              borderLeftColor: '#C3C3C3',
              borderRightColor: '#C3C3C3',
          //    underlayColor: "#ffffff",
              paddingHorizontal: 2,
              borderLeftWidth: StyleSheet.hairlineWidth,
             }}>
        <TouchableOpacity
          onPress={this.onPressInvites}
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ height: 18, width: 18 }}>
            <GiftsIcon height={18} width={18} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
             flexDirection: 'row',
             flex: 1,
             alignItems: 'center',
             borderLeftColor: '#C3C3C3',
             borderRightColor: '#C3C3C3',
        //     underlayColor: "#ffffff",
             paddingHorizontal: 12,
             borderLeftWidth: StyleSheet.hairlineWidth,
             borderRightWidth: StyleSheet.hairlineWidth,
             justifyContent: 'center'
     }}>
      <TouchableOpacity
        onPress={this.onPressNotifications}
        style={{ alignItems: 'center' }}
      >
        <View style={{ height: 18, width: 18 }}>
          <NotificationsIcon height={18} width={18} />
        </View>
      </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <TouchableOpacity
          onPress={this.onPressProfile}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
        <View style={{height: 28, width: 28}}>
          <Image
            style={[styles.searchIcon, { height: 28, width: 28, borderRadius: 28/2 }]}
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
