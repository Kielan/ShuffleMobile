import React from 'react'
import {
  Animated,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { HeaderLeftGroup, HeaderAccountButtons, HeaderLogo, HeaderSearch } from './index'
import { colors } from 'styles'

export class ShuffleHeader extends React.Component {
  render() {
    const { scene } = this.props;
    const topHeader = 10;
    let styleThemeStage;
    const progress = new Animated.Value(0);
    Animated.timing(progress, { toValue: 1 }).start();
    const snapchatAnimateOpacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    //const snapchatContainerLayout = progress.interpolate({
    //  inputRange: [0, 1],
    //  outputRange: [...StyleSheet.absoluteFillObject, 0],
    //})
    const snapchatHairlineLayout = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, StyleSheet.hairlineWidth],
    })
    if(styleThemeStage) {
      styleThemeStage = {
        logoBackground: {
          color: 'transparent'
        },
        logoText: {
          color: colors.whiteOne
        },
      }
    } else {
      styleThemeStage = {
        logoBackground: {
          color: colors.primaryOrange
        },
        logoText: {
          color: colors.whiteOne
        }
      }
    }
    //borderBottomWidth: StyleSheet.hairlineWidth,
    return (
      <View style={{ height: 64, flexDirection: 'row', color: 'transparent', backgroundColor: 'transparent', borderBottomColor: '#C3C3C3', marginBottom: 54}}>
        <HeaderLeftGroup styleThemeStage={styleThemeStage} snapchatAnimateOpacity={snapchatAnimateOpacity} topHeader={topHeader} {...this.props} />
        <HeaderAccountButtons styleThemeStage={styleThemeStage} snapChatHairlineLayout={snapchatHairlineLayout} topHeader={topHeader} {...this.props} />
      </View>
    )
  }
}
