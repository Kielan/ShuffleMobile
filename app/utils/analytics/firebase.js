import { NativeModules } from 'react-native'

const NativeFirebaseAnalytics = NativeModules.FirebaseAnalytics;

const Firebase = {
  logEvent(eventName, params) {
    NativeFirebaseAnalytics.logEventWithName(eventName, params);
  }
}

export { Firebase }
