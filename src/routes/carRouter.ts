import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import Car from '../models/Car';

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

const carRouter = Router();

carRouter.post('/', carController.create);
carRouter.get('/', carController.read);

export default carRouter;