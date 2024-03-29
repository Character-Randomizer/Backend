require('dotenv').config()

const pgConnection = process.env.DB_URL

const sharedConfig = {
    client: `pg`,
    useNullAsDefault: true, 
    migrations: { directory: `./data/migrations` },
    seeds: { directory: `./data/seeds` },
    pool: { 
        min: 2, 
        max: 10
        }
    }

module.exports = {
    development: {
        ...sharedConfig,
        connection: `postgresql://postgres@localhost/char_random`
    },
    production: {
        ...sharedConfig,
        connection: pgConnection,
        ssl: {
            rejectUnauthorized: false
        }
    },
    testing: {
        ...sharedConfig,
        connection: `postgresql://postgres@localhost/char_random_test`
    }
}