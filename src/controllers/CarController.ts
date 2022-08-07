import { Request, Response, NextFunction } from 'express-serve-static-core';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  private _service;
  
  constructor(service: IService<ICar>) {
    this._service = service;
  }

  create = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const { model, year, color, buyValue, seatsQty, doorsQty } = request.body;
      const car = { model, year, color, buyValue, seatsQty, doorsQty };
      const created = await this._service.create(car);
      return response.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };

  read = async (
    _request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const carList = await this._service.read();
      return response.status(200).json(carList);
    } catch (error) {
      next(error);
    }
  };
}

export default CarController;