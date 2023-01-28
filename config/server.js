module.exports = ({ env }) => ({
  // host: env('HOST', '0.0.0.0'),
  host: env('HOST', '151.106.108.7'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
