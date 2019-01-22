
const arrayMiddleware =
  _ =>
    next =>
      action => (Array.isArray(action) ? action.map(next) : next(action));

export { arrayMiddleware }
