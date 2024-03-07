import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex): Promise<void> {

    return knex
    .schema
    .createTable(ETableNames.cities, table => {

        table.bigIncrements('id').primary().index();
        table.string('citie_name', 156).checkLength('<=', 156).index().notNullable();

    }).then(() => {
        console.log(`Create table ${ETableNames.cities}`)
    });

};

export async function down(knex: Knex): Promise<void> {
  
    return knex.schema.dropTable(ETableNames.cities).then(() => {
        console.log(`Drop table ${ETableNames.cities}`)
    });

};
