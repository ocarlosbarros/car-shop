import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import Car from '../../../models/Car';
import carMock from '../../mocks/carMock';
import { Model } from 'mongoose';


describe('Car model', () => {

 const carModel = new Car();

  before(async () => {
    sinon
        .stub(Model, 'create')
        .resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  });

  describe('creating a car', () => {

      it('Car created successfully', async () => {
        const newCar = await carModel.create(carMock);
        expect(newCar).to.be.eql(newCar)
      });
  });


});