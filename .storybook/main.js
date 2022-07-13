module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'themeprovider-storybook'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve ={
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@mui/styled-engine': '@mui/styled-engine-sc'
      }
    }
    return config;
  },
  features: {
    interactionsDebugger: true
  }
};
