/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['three'])

const plugins = [[withTM()]]

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
}
module.exports = withPlugins(
  // PLUGINS
  plugins,
  // NEXT CONFIG
  nextConfig
)
