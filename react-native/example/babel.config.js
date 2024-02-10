const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
          alias: {
            '@comfortui/base': path.resolve(
              __dirname,
              '..',
              'packages/base/src'
            ),
          },
        },
      ],
    ],
  };
};
