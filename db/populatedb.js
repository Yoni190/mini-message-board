const { Client } = require('pg')
require('dotenv').config()

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text TEXT NOT NULL,
        username TEXT NOT NULL,
        added TIMESTAMP NOT NULL DEFAULT NOW()
    );

    INSERT INTO messages (text, username)
    VALUES
    ('This is text 1', 'John'),
    ('This is text 2', 'Amanda'),
    ('This is text 3', 'Jonathan');
`;

async function main() {
    console.log('seeding...')

    const client = new Client({
        connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=${process.env.PGSSLMODE}&channel_binding=${process.env.PGCHANNELBINDING}`
    })
    await client.connect()
    await client.query(SQL)
    await client.end()

    console.log('done')
}

main()