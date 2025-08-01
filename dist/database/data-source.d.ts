import { DataSource } from 'typeorm';
declare const dataSource: DataSource;
export declare function iniitializeDataSource(): Promise<DataSource>;
export default dataSource;
