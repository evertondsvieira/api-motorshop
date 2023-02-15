import { DataSource, DataSourceOptions } from "typeorm"
import "reflect-metadata";
import "dotenv/config"

const dataSourceConfig = (): DataSourceOptions => (
    {
        type: "postgres",
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        logging: true,
        synchronize: false,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts']
    }
)

export const AppDataSource = new DataSource(dataSourceConfig())
