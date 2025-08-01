import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

const dataSource = new DataSource({
  type: (process.env.DB_TYPE as 'postgres') || 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [process.env.DB_ENTITIES!],
  synchronize: true,
  ssl: process.env.DB_SSL === 'true',
});

export async function iniitializeDataSource() {
  if (!dataSource.isInitialized) {
    try {
      await dataSource.initialize();
    } catch (error) {
      console.error('initialization failed', error.message);
      process.exit(1);
    }
  }
  return dataSource;
}

export default dataSource;
