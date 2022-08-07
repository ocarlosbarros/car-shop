interface IService<T> {
  create(entity: T): Promise<T>,
  read(): Promise<Array<T>>,

}

export default IService;