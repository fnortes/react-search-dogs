const defaultConfig = (environment) => {
  console.info(`Running in ${environment} mode.`)
  const isProMode = environment === 'production'

  return {
    entryPoints: ['src/index.jsx'],
    outdir: 'public/bundle',
    bundle: true,
    define: {
      'process.env.NODE_ENV': `"${environment}"`
    },
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    format: 'esm',
    splitting: true
    minify: isProMode,
    sourcemap: !isProMode,
    watch: isProMode
      ? false
      : {
          onRebuild(error) {
            if (error) {
              console.error('watch build failed', error)
            } else {
              console.info('watch build succeeded')
            }
          }
        }
  }
}

exports.defaultConfig = defaultConfig
