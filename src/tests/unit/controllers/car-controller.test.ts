import chai from 'chai';
const { expect } = chai;
import { Request, Response, NextFunction } from 'express';
import sinon from 'sinon';
import Car from '../../../models/Car';
import { carMock } from '../../mocks/carMock';
import { Model } from 'mongoose';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { ZodError } from 'zod';


describe('Sua descrição', () => {
    let request = {} as Request;
    let response = {} as Response;
    let next = {} as NextFunction;

    const car = new Car();
    const carService = new CarService(car);
    const carController = new CarController(carService);
    
  before(async () => {
    sinon.stub(carService, "create").resolves(carMock);
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  after(()=>{
    sinon.restore();
  });

  describe('Create a Car', () => {
      
    it('Success', async() => {
        request.body = carMock;
        await carController.create(request, response, next);

        expect((response.status as sinon.SinonStub).calledWith(201)).to.be.true;
        expect((response.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });
  
});