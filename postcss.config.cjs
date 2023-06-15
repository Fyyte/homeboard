const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    }),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}

module.exports = config
