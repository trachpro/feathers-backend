// Initializes the `order` service on path `/order`
const createService = require('feathers-sequelize');
const createModel = require('../../models/order.model');
const hooks = require('./order.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/order', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('order');

  service.hooks(hooks);
};
