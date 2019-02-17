import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Animated,
  Image,
} from 'react-native'
import { MagicIcon } from 'components/SvgIcons'
import { colors } from 'styles'

const filtersColors = [
  colors.paletteTeal,
  colors.paletteLightBlue,
  colors.paletteViolet,
  colors.paletteDarkBlue,
  colors.palettePurple,
]
const filtersTitleColors = [
  colors.greyTwo,
  colors.paletteLightBlue,
  colors.paletteViolet,
  colors.paletteDarkBlue,
  colors.palettePurple,
]
const filters = [
  {
    image: 'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
    title: 'all',
    icon: () => <MagicIcon />,
  },
  {
    image: 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
    title: 'following',
  },
  {
    image: 'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
    title: 'photography',
  },
]


export class InterestSifter extends React.Component {
  render() {
    let imageArray = []
    let barArray = []

    filters.forEach((interest, i) => {
      console.log(interest, i)
      const InterestWand = interest.icon ? interest.icon : null

      const InterestIcon = (
        <View style={{ flex: 1, width: 100, maxWidth: 100, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {interest.icon ? <View style={{ height: 40, width: 40, borderWidth: 1, borderColor: filtersColors[i], borderRadius: 50/2, justifyContent: 'center', alignItems: 'center' }}><View style={{ height: 20, width: 20 }}><MagicIcon /></View></View> : <View style={{
            width: 40, height: 40,
            borderWidth: 1, backgroundColor: colors.whiteTwo,
            borderColor: filtersColors[i], borderRadius: 50/2,
            justifyContent: 'center', alignItems: 'center'
           }}>
            <Text style={{ color: filtersColors[i] }}>{`A`}</Text>
          </View> }
        <View style={{width: 100, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
          <Text style={{ textTransform: 'uppercase', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: filtersTitleColors[i], fontSize: 11 }}>{interest.title}</Text>
          </View>
        </View>
      )
      imageArray.push(InterestIcon)
    })
    return (
      <View style={{ backgroundColor: colors.whiteTwo, height: 100, alignItems: 'center' }}>
        <ScrollView
          contentContainerStyle={{flex: 1, alignItems: 'center' }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }>
          {imageArray}
        </ScrollView>
      </View>
    )
  }
}
