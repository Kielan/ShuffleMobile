import React from 'react'
import {
  Animated,
  Easing,
} from 'react-native'
import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'
import { AuthLoadingScreen, CameraScreen, LandingScreen, LoginScreen, HomeScreen, MakeAPostScreen, ProfileScreen, SearchScreen,  } from 'screens'
import { ShuffleHeader } from 'components/Header'
import { createShuffleTopNavigator } from './createShuffleTopNavigator'

const TabNavigator = createMaterialTopTabNavigator({
  Camera: {
    screen: CameraScreen,
      navigationOptions: {
          tabBarVisible: false,
          headerVisible: false,
      },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        tabBarVisible: false,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
        tabBarVisible: false,
    },
  },
}, {
  swipeEnabled: true,
  tabBarPosition: 'top',
//  tabBarVisible: false,
//  tabBarComponent
    navigationOptions: {
        header: props => {console.log('navigationOptions header props', props); return props.scene.route.index !== 0 ? <ShuffleHeader {...props} /> : null;},
        gesturesEnabled: true,
  //      tabBarVisible: false,
        headerStyle: {
          backgroundColor: 'transparent',
          color: 'transparent',
        },
        tabBarOptions: {
          style: {
            backgroundColor: 'transparent',
            color: 'transparent',
          }
        }
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
        color: 'transparent',
      },
    }
})

const AppStack = createStackNavigator({
  TabView: TabNavigator,
  MakeAPost: {
    screen: MakeAPostScreen,
    navigationOptions: {
        mode: 'modal',
        header: props => {let displayHeader = (props.scene.route.index === 0) ? null : <ShuffleHeader {...props} />; return displayHeader},
        transitionConfig: () => ({
          transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
          },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;

          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return { opacity, transform: [{ translateY }] };
          // Basically you need to create a condition for individual scenes
          //if (props.scene.route.routeName === 'MakeAPost') {

            // forVertical makes the scene transition for Top to Bottom
            //return CardStackStyleInterpolator.forVertical(props);
          //}

          //const last = props.scenes[props.scenes.length - 1];

          // This controls the transition when navigation back toa specific scene
          //if (last.route.routeName === 'MakeAPost') {

            // Here, forVertical flows from Top to Bottom
            //return CardStackStyleInterpolator.forVertical(props);
          //}

          //This declares the default transition for every other scene
          //return CardStackStyleInterpolator.forHorizontal(props);
         },
       }),
      }
    },
    Search: {
      screen: SearchScreen,
    },
  }, {
    cardStyle: {
      backgroundColor: 'transparent'
    }
  }
)

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
