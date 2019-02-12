import { Apptentive as ApptentiveInternal, ApptentiveConfiguration } from 'apptentive-react-native'

class ApptentiveBase {
  constructor() {
    const getApptentiveConfig = new ApptentiveConfiguration(
      '',
      ''
    )
    this.apptentive = ApptentiveInternal.register(getApptentiveConfig)
  }
  engageEvent(eventName, params) {
    console.log('=== APPTENTIVE JS EVENT', eventName, params);
    return ApptentiveInternal.engage(eventName).then(engaged => console.log('event_engaged', typeof engaged, engaged))
  }
}

export const Apptentive = new ApptentiveBase();
