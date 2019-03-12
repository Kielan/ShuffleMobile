import React from 'react'
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from 'react-native'
import { styles } from 'styles'

class CustomNavigator extends React.Component {
  _configureTransition(transitionProps, prevTransitionProps) {
    return {
      // duration in milliseconds, default: 250
      duration: 500,
      // An easing function from `Easing`, default: Easing.inOut(Easing.ease)
      easing: Easing.bounce,
    }
  }
  _render(transitionProps, prevTransitionProps) {
    const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));
    return (
      <View style={styles.stack}>
        {scenes}
      </View>
    );
  }
  _renderScene(transitionProps, scene) {
    const { position } = transitionProps;
    const { index } = scene;
    const opacity = position.interpolate({
      inputRange: [index-1, index, index+1],
      outputRange: [0, 1, 0],
    });
    // The prop `router` is populated when we call `createNavigator`.
    const Scene = this.props.router.getComponent(scene.route.routeName);
    return (
      <Animated.View style={{ opacity }}>
        { Scene }
      </Animated.View>
    )
  }
  render() {
      return (
        <Transitioner
          configureTransition={this._configureTransition}
          navigation={this.props.navigation}
          render={this._render}
        />
      );
  }
}
