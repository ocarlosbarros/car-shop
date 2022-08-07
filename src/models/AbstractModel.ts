import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class AbstractModel<T> implements IModel<T> {
  protected _model: Model<T>;
  
  constructor(model: Model<T>) {
    this._model = model;
  }
  
  public async read(): Promise<T[]> {
    const carList = await this._model.find();
    return carList;
  }
  
  public async create(entity: T): Promise<T> {
    const created = await this._model.create({ ...entity });
    return created;
  }

  //   read(): Promise<T[]> {
  //     throw new Error('Method not implemented.');
  //   }

//   readOne(_id: string): Promise<T | null> {
//     throw new Error('Method not implemented.');
//   }
//   update(_id: string, entity: T): Promise<T | null> {
//     throw new Error('Method not implemented.');
//   }
//   delete(_id: string): Promise<T | null> {
//     throw new Error('Method not implemented.');
//   }
}

export default AbstractModel;