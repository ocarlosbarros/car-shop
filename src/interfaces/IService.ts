interface IService<T> {
  create(entity: T): Promise<T>,
}

export default IService;