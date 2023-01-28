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
    // connection: {
    //   host: "localhost",
    //   port: 8889,
    //   database: "strapi",
    //   user: "root",
    //   password: "root"
    // },
    connection: {
      host: "localhost",
      port: 3306,
      database: "dashboard",
      user: "faroukdev",
      password: "F@rouk0904"
    },
    useNullAsDefault: true,
  },
});
