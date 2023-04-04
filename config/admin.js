module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "admin-jwt-default"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "api-token-salt-default"),
  },
});
