module.exports = ({ env }) => ({
  auth: {
    secret: env('FIELDS_MULTIVERSE_JWT_SECRET'),
  },
  apiToken: {
    salt: env('FIELDS_MULTIVERSE_API_TOKEN_SALT'),
  },
});
