require('dotenv').config()

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const plugins = [optimizedImages]

const nextConfig = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    TEST_VAR: process.env.TEST_VAR,
  },
}

module.exports = withPlugins([...plugins], nextConfig)
