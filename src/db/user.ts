import { Model, DataTypes } from "../deps/denodb.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { type: DataTypes.STRING, length: 36, primaryKey: true },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.FLOAT,
    email: DataTypes.STRING,
  };

  static defaults = {
    id: () => crypto.randomUUID(),
  };
}
