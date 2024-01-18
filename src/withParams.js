/* istanbul ignore next */
const withParams =
  import.meta.env.BUILD === 'web'
    ? require('./withParamsBrowser').withParams
    : require('./params').withParams

export default withParams
