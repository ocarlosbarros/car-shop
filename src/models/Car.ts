import { model as mongooseModel, Schema } from 'mongoose';
import AbstractModel from './AbstractModel';
import { ICar } from '../interfaces/ICar';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
}, { versionKey: false });

class Car extends AbstractModel<ICar> {
  constructor(model = mongooseModel('Car', carSchema)) {
    super(model);
  }
}

export default Car;