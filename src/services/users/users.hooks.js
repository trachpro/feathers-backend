const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

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
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ hashPassword(), setCreatedAt ],
    update: [ hashPassword(),  authenticate('jwt'), setUpdatedAt ],
    patch: [ hashPassword(),  authenticate('jwt'), setUpdatedAt ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
