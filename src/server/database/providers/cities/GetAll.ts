import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';
import { ICities } from '../../models';

export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise< ICities[] | Error> => {

    try {
        
        const result = await Knex(ETableNames.cities)
            .select('*')
            .where('id', Number(id))
            .orWhere('citie_name', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);

        if (id > 0 && result.every(item => item.id !== id)) {
            const resultById = await Knex(ETableNames.cities)
            .select('*')
            .where('id', '=', id)
            .first();

            if (resultById) return [...result, resultById];
        };

        return result;

    } catch (error) {

        return Error('Error when querying records');

    };

};