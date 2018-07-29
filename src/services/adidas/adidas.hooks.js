const { authenticate } = require('@feathersjs/authentication').hooks;

function setOrderDesc(data) {
  data.params.query.$sort = { id: -1 };
}

function setCreatedAt(data) {

  data.params.query.createdAt = new Date();
  data.params.query.updatedAt = new Date();
}

function setUpdatedAt(data) {

  data.params.query.updatedAt = new Date();
}

module.exports = {
  before: {
    all: [],
    find: [setOrderDesc],
    get: [setOrderDesc],
    create: [setCreatedAt],
    update: [setUpdatedAt],
    patch: [setUpdatedAt],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
