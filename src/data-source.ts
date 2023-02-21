import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import "dotenv/config";
import { initial1676902023034 } from "./migrations/1676902023034-initial";
import { newUniqueFields1676902884541 } from "./migrations/1676902884541-new-unique-fields";

const dataSourceConfig = (): DataSourceOptions => ({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  synchronize: false,
  entities: [User, Address],
  migrations: [initial1676902023034, newUniqueFields1676902884541],
});

export const AppDataSource = new DataSource(dataSourceConfig());