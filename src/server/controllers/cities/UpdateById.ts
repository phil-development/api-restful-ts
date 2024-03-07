import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ICities } from '../../database/models';
import { validation } from '../../shared/middleware';
import { CitiesProvider } from '../../database/providers/cities';

interface IParamProps {
    id?: number;
};

interface IBodyProps extends Omit<ICities, 'id'> {};

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({

        citie_name: yup.string().required().min(3).max(156),

    })),
    params: getSchema<IParamProps>(yup.object().shape({

        id: yup.number().integer().required().moreThan(0),

    })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

    if (!req.params.id) {

        return res.status(StatusCodes.BAD_REQUEST).json({
    
            errors: {
                default: 'The "id" parameter needs to be informed'
            }
    
        });
    
    };

    const result = await CitiesProvider.updateById(req.params.id, req.body);

    if (result instanceof Error) {

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({

            erros: {
                default: result.message
            }

        });

    };

    return res.status(StatusCodes.NO_CONTENT).json(result);

};