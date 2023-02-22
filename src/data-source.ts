import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Comments } from "./entities/comments.entity";
import { Annoucements } from "./entities/annoucements.entity";
import { initial1677089430604 } from "./migrations/1677089430604-initial";
import { typeIdComment1677089669843 } from "./migrations/1677089669843-type-id-comment";
import { typeIdAnnouncement1677090364960 } from "./migrations/1677090364960-type-id-announcement";

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
    initial1677089430604,
    typeIdComment1677089669843,
    typeIdAnnouncement1677090364960,
  ],
});

export const AppDataSource = new DataSource(dataSourceConfig());
