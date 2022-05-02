import { RouterMiddleware } from "../deps/oak.ts";

export const home: RouterMiddleware<string> = ({ response }) => {
  response.body = "Hello World!";
};
