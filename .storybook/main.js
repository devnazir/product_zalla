module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /.\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    });

    return config;
  },
}