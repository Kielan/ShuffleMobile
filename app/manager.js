import { getTs, minMs, isValExpired } from 'utils/date'
import { api } from 'api'
import { ActionType } from 'store/actions'
import { func as navigationFunc } from 'store/navigation'

export class SateManager {
  constructor(store) {
    this.store = store
    this.navigation = navigationFunc(this)
  }

  async signIn(email, password) {
    const data = await api.auth.signIn({ email: 'email', password: 'password' })
    this.dispatch({ type: ActionType.UserSignIn, data, ts: getTs() })
    await this.navigation.navigateToNextInFlowOrMain()
  }

}
