import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamProps {
    id?: number;
};

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({

        id: yup.number().integer().required().moreThan(0),

    })),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
    
    if (!req.params.id) {

        return res.status(StatusCodes.BAD_REQUEST).json({
    
            errors: {
                default: 'The "id" parameter needs to be informed'
            }
    
        });
    
    };

    const result = await CitiesProvider.getById(req.params.id);

    if (result instanceof Error) {

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({

            erros: {
                default: result.message
            }

        });

    };

    return res.status(StatusCodes.OK).send(result);

};