// Update with your config settings.

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "localhost",
            user:   "naythukhant",
            password:  "naythukhant",
            database:  "serverless_nodejs_crud",
        },
        pool: {
            min: 0,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            stub: "stubs/migration.stub",
        },

    },

    staging: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        pool: {
            min: 0,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            stub: "stubs/migration.stub",
        },

    },

    production: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        pool: {
            min: 0,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            stub: "stubs/migration.stub",
        },

    },


}
