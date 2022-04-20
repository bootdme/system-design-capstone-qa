const { Pool } = require('pg');
// require('dotenv').config();

// const poolConfig = process.env.DATABASE_URL ? {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnAuthorized: false,
//   },
// } : {
//   user: 'postgres',
//   password: '',
//   host: 'localhost',
//   port: '5432',
//   database: 'qa',
// };

const poolConfig = {
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: '5432',
  database: 'qa',
};

const pool = new Pool(poolConfig);
module.exports = pool;
pool.connect()
  .then(() => {
    console.log('successful connection of postgres database');
  })
  .catch(() => {
    console.log('error connecting to postgres database');
  });
