import { RouterMiddleware } from "../deps/oak.ts";

import { User } from "../db/user.ts";

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

  const userCreated = await User.create(user);
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
