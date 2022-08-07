import IService from '../interfaces/IService';
import carZodSchema, { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async read(): Promise<Array<ICar>> {
    const carList = await this._car.read();
    return carList;
  }

  public async create(entity: ICar): Promise<ICar> {
    const parsed = carZodSchema.safeParse(entity);

    if (!parsed.success) {
      throw parsed.error;
    }
    const created = await this._car.create(entity);
    return created;
  }
}

export default CarService;