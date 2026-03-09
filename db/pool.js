const { Pool } = require('pg')
const { database, password, connectionString } = require('pg/lib/defaults')
require('dotenv').config()

module.exports = new Pool({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=${process.env.PGSSLMODE}&channel_binding=${process.env.PGCHANNELBINDING}`
})