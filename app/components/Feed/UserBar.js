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
      <View style={[
        styles.container,
         {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'center',
           backgroundColor: colors.whiteTwo,
           height: 86, maxHeight: 86,
           borderTopRightRadius: 8,
           borderTopLeftRadius: 8,
           paddingHorizontal: 15,
         }
       ]}>
        {avatar &&
            <View style={{ flexDirection: 'row', maxHeight: 64, maxWidth: 64, height: 64, width: 64, borderRadius: 64/2, }}>
            <TouchableOpacity style={{flex: 1}} onPress={onPressAvatar} disabled={!onPressAvatar}>
            <View style={{ height: 32, width: 32, maxWidth: 32, maxHeight: 32 }}>
            <Image
              styles={[{ flex:1 , width: undefined, height: undefined, borderRadius: 64/2 }]}
              source={require('assets/kielanshufflesmall.png')}
            />
            </View>
            </TouchableOpacity>
            </View>
        }

        <View style={{ flex: 1, height: 64, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-around', height: 64, maxHeight: 64 }}>
            <Text style={[styles.username, { textTransform: 'uppercase', color: colors.primaryBlue }]}>{username}</Text>
            <Text style={{textTransform: 'uppercase', color: colors.greyTwo }}>{'sf'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-around', height: 64, maxHeight: 64 }}>
          <Text style={{ textTransform: 'uppercase', textAlign: 'right', fontSize: 13 }}>{'culinary arts'}</Text>
          <Text style={{ textTransform: 'uppercase', textAlign: 'right', fontSize: 10 }}>{'follow interest'}</Text>
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
