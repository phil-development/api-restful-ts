import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';
import { ICities } from '../../models';

export const updateById = async (id: number, citie: Omit<ICities, 'id'>): Promise<void | Error> => {

    try {
        
        const result = await Knex(ETableNames.cities)
            .update(citie)
            .where('id', '=', id);

        if (result > 0) return; 

        return new Error('Error updating record');

    } catch (error) {

        return Error('Error updating record');

    };

};