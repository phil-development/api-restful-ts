import { Request, Response, query } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { CitiesProvider } from '../../database/providers/cities';

interface IQueryProps {
    id?: number;
    page?: number;
    limit?: number;
    filter?: string;
};

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({

        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        id: yup.number().optional().integer().default(0),
        filter: yup.string().optional(),
    
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

    const DEFAULT_PAGE = 1; 
    const DEFAULT_LIMIT = 10;
    const DEFAULT_FILTER = '';
    const DEFAULT_ID = 0;

    const result = await CitiesProvider.getAll(req.query.page || DEFAULT_PAGE, req.query.limit || DEFAULT_LIMIT, req.query.filter || DEFAULT_FILTER, Number(req.query.id || DEFAULT_ID));
    const count = await CitiesProvider.count(req.query.filter);

    if (result instanceof Error) {
    
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
    
    } else if (count instanceof Error) {
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: count.message }
        });
    
    };

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    return res.status(StatusCodes.OK).json(result);

};