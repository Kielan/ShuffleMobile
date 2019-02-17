import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { styles } from 'styles'
import _ from 'lodash'
import { ChatBubbleIcon, HeartIcon, MagicIcon } from 'components/SvgIcons'
import { colors } from 'styles'

export const Footer = (props) => {
  const { title, content, image, url } = props;
  return (
    <View style={{
            flex: 1, shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            height: 50,
            backgroundColor: colors.whiteTwo,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8
           }}>
           <View style={{
             flex: 1,
             alignItems: 'center',
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
             paddingHorizontal: 50,
            }}>
             <View style={{ height: 24, width: 24 }}><ChatBubbleIcon /></View>
             <View style={{ height: 24, width: 24 }}><MagicIcon /></View>
             <View><Text style={{ textTransform:'uppercase', fontSize: 11, color: colors.greyTwo }}>view</Text></View>
           </View>
    </View>
  )
}
