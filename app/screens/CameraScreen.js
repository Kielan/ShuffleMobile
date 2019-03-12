import React from 'react'
import {
  InteractionManager,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import { colors } from 'styles'
import { ShuffleHeader } from 'components/Header'

export class CameraScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: null
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      shouldRenderCamera: false,
      camera: {
      }
    }
  }
  componentDidMount() {
    let cameraScope = this;
    InteractionManager.runAfterInteractions(() => {
      cameraScope.setState({ shouldRenderCamera: true })
    });
  }
  takePicture = () => {

  }
  _maybeRenderCamera = (props) => {
    if (!this.state.shouldRenderCamera) {
      return;
    }
    const cameraScreenHeaderStyle = {
      styleThemeStage: {
        logoBackground: {
          color: 'transparent'
        },
        logoText: {
          color: colors.whiteOne
        },
      }
    }
    console.log('_maybeRenderCamera', props)
    return (
      <RNCamera
        ref={cam => {
          this.camera = cam;
        }}
        style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center'}}
      >
        <ShuffleHeader styleThemeStage={cameraScreenHeaderStyle} />
        <View style={{width: 100, height: 100, backgroundColor: colors.whiteFive}}>
          <TouchableOpacity style={{flex: 1}} onPress={this.takePicture}>
            <Text style={{ color: colors.whiteTwo }}>take photo</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._maybeRenderCamera(this.props)}
      </View>
    )
  }
}
