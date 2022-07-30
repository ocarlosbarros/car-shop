export interface IModel<T> {
  create(entity: T): Promise<T>,
  // read(): Promise<Array<T>>,
  // readOne(_id: string): Promise<T | null>,
  // update(_id: string, entity: T): Promise<T | null>,
  // delete(_id: string): Promise<T | null>,
}
