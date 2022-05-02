import { Model, DataTypes } from "../deps/denodb.ts";
export interface IUser {
  id: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  active: boolean;
}
export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.FLOAT,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  };

  static defaults = {
    active: false,
  };
}
