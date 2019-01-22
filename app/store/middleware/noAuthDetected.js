import { get } from 'lodash';
import { manager } from 'store';

const noAuthDetected =
  (_) => (next) => (action) => {
    if (action.type === 'APOLLO_QUERY_RESULT') {
    // Sign out if token expired
    const errors = get(action, [ 'result', 'errors' ], [])
    if (errors.length > 0) {
      const error = errors[0];
      if (error.error === 'NotAuthenticated') {
        manager.signOut()
      }
    }
  }
  return next(action);
};

export { noAuthDetected }
