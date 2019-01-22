import { dev, apiConfigs } from 'config';

class ApiClient {
  constructor(apiConf) {
//    const gqLink = new HttpLink({
//      uri: Env.graphql_endpoint,
//      credentials: 'same-origin',
//      fetch: djangoFetch,
//    });
//    this.apolloClient = new ApolloClient({
//      link: authLink.concat(gqLink),
//      cache: new InMemoryCache().restore({}),
//    });
  }
    // Core calls
    // fetchPolicy "cache-first" | "cache-and-network" | "network-only" | "cache-only" | "standby"

//  mutate = (mutation, variables = {}) => {
//    return this.apolloClient.mutate({ mutation, variables });
//  }

//  query = (query, variables = {}) => {
//    return this.apolloClient.query({ query, variables, fetchPolicy: 'network-only' });
//  }
}

const initClientEnv = () => {
  if (dev) {
    console.log('development mode')
    return new ApiClient(apiConfigs.dev)
  }
  return new ApiClient(apiConfigs.prod)
}

const api = initClientEnv();

export { api };
