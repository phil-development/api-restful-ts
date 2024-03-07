import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';
import { ICities } from '../../models';

export const getById = async (id: number): Promise< ICities | Error> => {

    try {
        
        const result = await Knex(ETableNames.cities)
            .select('*')
            .where('id', '=', id)
            .first();

        if (result) return result; 

        return new Error('Register not found');

    } catch (error) {

        return Error('Error when querying the registry');

    };

};