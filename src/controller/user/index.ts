import { RouterMiddleware } from "../../deps/oak.ts";
import { genSaltSync, hash, compare } from "../../deps/bcrypt.ts";
import { User, IUser } from "../../db/user.ts";
import {
  validate,
  required,
  isEmail,
  minLength,
} from "../../deps/validasaur.ts";

export const login: RouterMiddleware<string> = async ({
  request,
  response,
}) => {
  const { email, password } = await request.body().value;
  const [passes, errors] = await validate(
    { email, password },
    {
      email: [required, isEmail],
      password: [required, minLength(8)],
    }
  );
  if (!passes) {
    response.status = 400;
    response.body = { errors };
    return;
  }

  const user = (await User.where("email", email).first()) as unknown as IUser;

  if (!user) {
    response.status = 400;
    response.body = { message: "User not found" };
    return;
  }

  const valid = await compare(password, user.password);
  if (!valid) {
    response.status = 400;
    response.body = { message: "Invalid password" };
    return;
  }
  response.body = {
    message: "Logged in",
    user: {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      active: user.active,
    },
  };
};

export const getUsers: RouterMiddleware<string> = async ({ response }) => {
  const users = await User.all();
  response.body = users;
};

export const getUser: RouterMiddleware<string> = async ({
  response,
  params,
}) => {
  const user = await User.find(params.id);
  response.body = user;
};

export const createUser: RouterMiddleware<string> = async ({
  request,
  response,
}) => {
  const user = await request.body().value;
  const { password } = user ?? {};
  const salt = genSaltSync();
  const hashedPassword = await hash(password, salt);

  const userCreated = await User.create({ ...user, password: hashedPassword });
  response.body = userCreated;
};

export const updateUser: RouterMiddleware<string> = async ({
  request,
  response,
  params,
}) => {
  const user = await request.body().value;
  await User.where("id", params.id).update(user);
  const userQuery = await User.find(params.id);
  response.body = userQuery;
};

export const deleteUser: RouterMiddleware<string> = async ({
  response,
  params,
}) => {
  await User.deleteById(params.id);
  response.body = { message: "User deleted" };
};
