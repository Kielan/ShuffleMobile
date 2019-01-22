import { ActionType } from 'store/actions'
import { initial } from './reducer'

export const func = (m) => {
  const resetAppNavigation = () => {
    setAppNavigation(initial.app)
  };

  const setAppRootScreen = (name) => {
    m.dispatch({ type: ActionType.NavigationSetAppRootScreen, data: name })
  }

  const navigateToNextInFlowOrMain = () => {
    resetAppNavigation()
    setAppRootScreen()
  }

  return { navigateToNextInFlowOrMain }
}
