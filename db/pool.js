const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db_config = { 
    connectionString:process.env.DATABASE_URL,
    connectionTimeout: 300,
    idleTimeout: 200,
    max: 20, 
};

const pool = new Pool(db_config);

pool.on('connect', () => {
    console.log('database is connected')
})

pool.on('remove', () => {
    console.log('database removed')

})

module.exports = pool;