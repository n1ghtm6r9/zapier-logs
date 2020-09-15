const { expect } = require('chai');
const axios = require('axios').default;
const zapier = require('zapier-platform-core');
const createLog = require('../creators/log');
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('create log', () => {

  it('should create log', async () => {
    const message = `Test ${Date.now()}`;

    const response = await appTester(App.creates[createLog.key].operation.perform, {
      inputData: {
        message
      }
    });

    expect(response.message).eq(message);

    await axios.delete(`https://5f60872a90cf8d0016557e62.mockapi.io/logs/${response.id}`);
  });
});
