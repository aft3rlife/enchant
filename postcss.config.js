const postcssConfig = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-color-function': {},
    'postcss-nested': {},
    'postcss-cssnext': {},
    'postcss-normalize': {
      allowDuplicates: true
    }
  }
}

// Compress CSS with cssnano in production
if (process.env.NODE_ENV === 'production') {
  postcssConfig.plugins['cssnano'] = {}
}

module.exports = postcssConfig
