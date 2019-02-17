import React from 'react'
import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { AuthLoadingScreen, LandingScreen, LoginScreen, HomeScreen, MakeAPostScreen } from 'screens'
import { ShuffleHeader } from 'components/Header'

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        header: props => <ShuffleHeader {...props} />,
    }
  },
  MakeAPost: {
    screen: MakeAPostScreen,
    navigationOptions: {
        mode: 'modal',
        header: props => <ShuffleHeader {...props} />,
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
