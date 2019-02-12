import React from 'react'
import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import { colors, styles } from 'styles'
import { humanizeTimestamp } from 'utils';
/*
export const UserBar = ({
  username,
  subtitle,
  avatar,
  follow,
  onPressAvatar,
  icon,
  ...props
}) => {
*/
export class UserBar extends React.Component {
  render(){
    let { props } = this
    let { avatar, follow, onPressAvatar, username, subtitle, icon } = props
    let time = props.time;
    if (time === undefined && props.timestamp != null) {
      time = humanizeTimestamp(props.timestamp)
    }
  //        <TouchableOpacity onPress={onPressAvatar} disabled={!onPressAvatar}>
  //        </TouchableOpacity>
    return (
      <View style={[styles.container, { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.whiteTwo, height: 86, maxHeight: 86 }]}>
        {avatar &&
            <View style={{ flexDirection: 'row', maxHeight: 64, maxWidth: 64, height: 64, width: 64}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={onPressAvatar} disabled={!onPressAvatar}>
            <View style={{ height: 32, width: 32}}>
            <Image
              styles={[{ flex:1 , width: undefined, height: 64, borderRadius: 64/2 }]}
              source={require('assets/kielanshufflesmall.png')}
            />
            </View>
            </TouchableOpacity>
            </View>
        }

        <View style={{ flex: 1, height: 64, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.username}>{username}</Text>
          <View style={{ flexDirection: 'row', width: 24, height: 24, maxHeight: 32 }}>
            {/*icon !== undefined ? (
              <Image
                source={icon}
                style={{ width: 24, height: 24, maxHeight: 32, maxWidth: 32, top: -2, marginRight: 25 }}
              />
            ) : null*/}
            {subtitle && <Text style={styles.subtitle}>{'subtitle'}</Text>}
          </View>
        </View>

        <View>
          <Text>{'culinary arts'}</Text>
          <Text>{'follow interest'}</Text>
        </View>
        {time && (
          <View>
            <Text style={styles.time}>{time}</Text>
          </View>
        )}
      </View>
    );
  }
}
