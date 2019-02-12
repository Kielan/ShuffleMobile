import React from 'react'
import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import { AuthLoadingScreen, LandingScreen, LoginScreen, HomeScreen } from 'screens'

const AppStack = createStackNavigator({
  Home: HomeScreen,
})

const AuthStack = createStackNavigator({
  LandingScreen: LandingScreen,
  LoginScreen: LoginScreen,
}, { headerMode: 'none' })

const NavigationStack = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
))

export {
  AppStack,
  AuthStack,
  NavigationStack
}
