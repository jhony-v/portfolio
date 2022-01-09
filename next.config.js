const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: (config) => {
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin({
        configFile: './tsconfig.paths.json',
      }),
    ]
    config.plugins = [...config.plugins]
    return config
  },
}
