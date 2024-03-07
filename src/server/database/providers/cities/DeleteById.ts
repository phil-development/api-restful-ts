import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';

export const deleteById = async (id: number): Promise<void | Error> => {

    try {
        
        const result = await Knex(ETableNames.cities)
            .where('id', '=', id)
            .del();

        if (result > 0) return; 

        return new Error('Error deleting record');

    } catch (error) {

        return Error('Error deleting record');

    };

};