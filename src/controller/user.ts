import { type RouterMiddleware } from "../deps/oak.ts";

import { User } from "../db/config.ts";

export const getUsers: RouterMiddleware<string> = async ({ response }) => {
  const users = await User.all();
  response.body = users;
};

export const createUser: RouterMiddleware<string> = async ({
  request,
  response,
}) => {
  const user = await request.body().value;

  const userCreated = await User.create(user);
  response.body = userCreated;
};
