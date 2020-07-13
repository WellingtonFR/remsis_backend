module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "l9hDZrtFEVBqJKvDmv1f",
      database: "remsis",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-02.cleardb.com",
      port: 3306,
      user: "root",
      password: "209aa6ddca542da",
      database: "heroku_f2f70dcfa81c15f",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};
