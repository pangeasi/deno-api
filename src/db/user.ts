import { Model, DataTypes } from "../deps/denodb.ts";

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
