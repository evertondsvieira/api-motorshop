import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Comments } from "./entities/comments.entity";
import { Annoucements } from "./entities/annoucements.entity";
import { initialMigration1677691523873 } from "./migrations/1677691523873-initialMigration";

const dataSourceConfig = (): DataSourceOptions => ({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: true,
  synchronize: false,
  entities: [User, Address, Comments, Annoucements],
  migrations: [initialMigration1677691523873],
});

export const AppDataSource = new DataSource(dataSourceConfig());
