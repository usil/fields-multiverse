module.exports = ({ env }) => ({
  host: env('FIELDS_MULTIVERSE_HOST', '0.0.0.0'),
  port: env.int('FIELDS_MULTIVERSE_PORT', 1337),
  app: {
    keys: env.array('FIELDS_MULTIVERSE_APP_KEYS'),
  },
});
