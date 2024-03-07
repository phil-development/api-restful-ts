import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ICities } from '../../database/models';
import { validation } from '../../shared/middleware';
import { CitiesProvider } from '../../database/providers/cities';

interface IBodyProps extends Omit<ICities, 'id'> {};

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        
        citie_name: yup.string().required().min(3).max(156),
    
    })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const result = await CitiesProvider.create(req.body);

    if (result instanceof Error) {

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: result.message
        });

    };

    return res.status(StatusCodes.CREATED).json(result);

};