import { Router } from 'express';
import { CitiesController } from '../controllers/';

const routes = Router();

routes.get('/', (req, res) => {

    return res.json({
        message: 'Hello Dev!',
    });

});

routes.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
routes.post('/cities', CitiesController.createValidation, CitiesController.create);
routes.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById);
routes.put('/cities/:id', CitiesController.updateByIdValidation, CitiesController.updateById);
routes.delete('/cities/:id', CitiesController.deleteValidation, CitiesController.deleteById);

export default routes;