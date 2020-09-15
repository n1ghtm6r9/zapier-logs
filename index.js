const createLog = require('./creators/log');

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  creates: {
    [createLog.key]: createLog
  },
};

module.exports = App;
