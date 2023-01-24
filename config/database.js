const path = require('path');

module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },
  connection: {
    client: 'mysql',
    connection: {
      host: "localhost",
      port: 8889,
      database: "strapi",
      user: "root",
      password: "root"
    },
    useNullAsDefault: true,
  },
});
