import { ICities } from '../../models';
import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';

export const create = async (citie: Omit<ICities, 'id'>): Promise<number | Error> => {

    try {
        
        const [result] = await Knex(ETableNames.cities).insert(citie);

        if (typeof result === 'object' || typeof result === 'number') return result;

        return new Error('Error when registering');

    } catch (error) {

        return Error('Error when registering');

    };

};