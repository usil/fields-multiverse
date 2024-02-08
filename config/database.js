module.exports = ({ env }) => ({
  connection: {
    client: env('FIELDS_MULTIVERSE_DATABASE_CLIENT', 'mysql'),
    connection: {
      host: env('FIELDS_MULTIVERSE_DATABASE_HOST', '0.0.0.0'),
      port: env.int('FIELDS_MULTIVERSE_DATABASE_PORT', 3306),
      database: env('FIELDS_MULTIVERSE_DATABASE_NAME', 'fields_multiverse_db'),
      user: env('FIELDS_MULTIVERSE_DATABASE_USERNAME', 'root'),
      password: env('FIELDS_MULTIVERSE_DATABASE_PASSWORD', '12345'),
      ssl: env.bool('FIELDS_MULTIVERSE_DATABASE_SSL', false),
    },
    debug: false
  },
});
