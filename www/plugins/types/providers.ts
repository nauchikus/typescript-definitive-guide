export interface IDataProvider<T, P = unknown> {
  // new <T>(...params:T[]): IDataProvider<T, P>
  getData(params?: P): Promise<T>;
}
