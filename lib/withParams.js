var withParams = import.meta.env.BUILD === 'web'
  ? await import('./withParamsBrowser.js').then(module => module.withParams)
  : await import('./params.js').then(module => module.withParams);

export default withParams;