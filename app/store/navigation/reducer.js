import { AppStack, NavigationStack } from 'navigation'
import { RouteNames } from 'navigation'
console.log('AppStack kie', AppStack)

const appNavInitState = { index: 0, routes: [] };

export const initial = {
  app: appNavInitState,
}

export const reducer = (state = initial.app, action) => {
  switch (action.type) {
  case ActionType.NavigationSetAppNavigation: {
    return action.data;
  }
  case ActionType.NavigationSetAppRootScreen: {

  }
  case ActionType.UserSignOut: {
    return initial.app;
  }
  default: {
    return state;
  }
  }
};
