import {
  PostgresConnector,
  Database,
  Model,
  DataTypes,
} from "../deps/denodb.ts";
import { config } from "../deps/dotenv.ts";

const connection = new PostgresConnector({
  host: config()["DB_HOST"] || "127.0.0.1",
  database: config()["DATABASE"] || "postgres",
  port: +config()["DB_PORT"] || 5432,
  username: config()["DB_USER"] || "postgres",
  password: config()["DB_PASSWORD"] || "",
});

const db = new Database(connection);

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.FLOAT,
    email: DataTypes.STRING,
  };
}

export default db;
