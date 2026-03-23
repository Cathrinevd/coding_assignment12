const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.reccomended,
  {
    lnaguageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
