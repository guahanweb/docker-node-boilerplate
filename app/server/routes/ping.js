'use strict'

module.exports = {
  method: 'GET',
  path: '/ping',
  config: {
    auth: false,
    handler: (request, reply) => {
      reply({ "status": "OK" });
    }
  }
};
