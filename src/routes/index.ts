import { Router } from "../deps/oak.ts";
import { getUsers, createUser } from "../controller/user.ts";

const router = new Router();

export default router
  .get("/", getUsers)
  .get("/user", getUsers)
  .post("/user", createUser);
