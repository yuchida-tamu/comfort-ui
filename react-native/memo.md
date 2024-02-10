- Directory
  - example
    this is the project to test the ui packages (packages)
  - packages
    the directory to store ui packages

# Configuration memo

- in "example" directory, configure tsconfig.json and babel.config.js to enable the project to refer ui components from @comfortui

  - tsconfig.json

  ```
   "paths": {
    "@comfortui": ["../packages/src"]
  },
  ```

  - babel.config.js (make sure to install module resolver)

  ```
  yarn add babel-plugin-module-resolver --dev
  ```

  ```
   plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
          alias: {
            '@comfortui': path.resolve(__dirname, '..', 'packages/src'),
          },
        },
      ],
    ],
  ```

  - need to set up metro.config.js to enable example project to use the ui components

  - it will produce errors due to multiple React in App issue
  - resolve it by linking (yarn link) https://qiita.com/Lzpeth/items/1310344e380a877fa7a6#npm-link-%E3%81%AB%E3%82%88%E3%82%8B%E5%AF%BE%E5%BF%9C%E6%96%B9%E6%B3%95
