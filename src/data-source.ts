import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Comments } from "./entities/comments.entity";
import { Annoucements } from "./entities/annoucements.entity";
import { initial1677204054785 } from "./migrations/1677204054785-initial";
import { relationsComments1677504427789 } from "./migrations/1677504427789-relations-comments";
import { fieldComments1677541765010 } from "./migrations/1677541765010-field-comments";

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
  migrations: [
    initial1677204054785,
    relationsComments1677504427789,
    fieldComments1677541765010,
  ],
});

export const AppDataSource = new DataSource(dataSourceConfig());
