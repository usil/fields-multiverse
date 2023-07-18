const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('FIELDS_MULTIVERSE_JWT_SECRET'),
    },
  },
});