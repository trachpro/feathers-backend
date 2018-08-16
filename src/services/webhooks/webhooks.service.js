// Initializes the `webhooks` service on path `/webhooks`
const createService = require('./webhooks.class.js');
const hooks = require('./webhooks.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/webhooks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('webhooks');

  service.hooks(hooks);
};
