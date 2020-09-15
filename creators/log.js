const create = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://5f60872a90cf8d0016557e62.mockapi.io/logs',
    body: bundle.inputData
  });

  return response.json;
};

module.exports = {
  key: 'createLog',
  noun: 'Create Log',

  display: {
    label: 'Create Log',
    description: 'Create a log.'
  },

  operation: {
    inputFields: [
      { key: 'message', label: 'Message', required: false }
    ],
    perform: create
  }
};
