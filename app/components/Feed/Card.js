import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { styles } from 'styles'
import _ from 'lodash'

const Card = (props) => {
  const { title, content, image, url } = props;
  return (
    <View><TouchableOpacity
      onPress={() => {
        Linking.openURL(url);
      }}
      style={{flex: 1}}
    >
      {image && <View><Image
       style={[styles.image, { maxHeight: 40, maxWidth: 40 }]}
       source={{ uri: image }}
       resizeMethod="resize"
     /></View>}
     <View style={[styles.content, { minHeight: 25 }]}>
        <Text style={styles.title}>{_.truncate(title, { length: 60 })}</Text>
        <Text style={styles.description}>
          {_.truncate(content, { length: 60 })}
        </Text>
      </View>
    </TouchableOpacity></View>
  )
}

export { Card }
