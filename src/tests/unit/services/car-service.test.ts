import Car from '../../../models/Car';
import chai  from 'chai';
import sinon from 'sinon';

import { carMock, carMockWithId } from '../../mocks/carMock';
import CarService from '../../../services/CarService';
import { ZodError } from 'zod';

const { expect } = chai;

describe('Car Service', () => {
    const car = new Car();
    const carService = new CarService(car);

  before(async () => {
    sinon
      .stub(car, 'create')
      .resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create a car', () => {

      it('Create a car with success', async () => {

        const created = await carService.create(carMock);
        expect(created).to.be.eql(carMockWithId);
      });

      it('Create a car return a failure', async () => {
        try {
            await carService.create({} as any)
        } catch (error) {
            expect(error).to.be.instanceof(ZodError);            
        }
      });
  });


});