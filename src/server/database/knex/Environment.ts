import 'dotenv/config';
import { Knex } from 'knex';
import path from 'path';

export const development: Knex.Config = {

    client: 'mysql2',
    connection: {
        host : process.env.DATABASE_HOST,
        port : Number(process.env.DATABASE_PORT || 3306),
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME,
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds')
    },

};

export const test: Knex.Config = {
    ...development,
    connection: ':memory:',
};

export const production: Knex.Config = {
    ...development
};