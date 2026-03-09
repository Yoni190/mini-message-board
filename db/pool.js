const { Pool } = require('pg')
const { database, password } = require('pg/lib/defaults')
require('dotenv').config()

module.exports = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD
})