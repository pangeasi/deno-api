import { Router } from "../deps/oak.ts";
import {
  login,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user/index.ts";
import { home } from "../controller/index.ts";
const router = new Router();

export default router
  // home page
  .get("/", home)
  // User
  .post("/login", login)
  .get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/user", createUser)
  .patch("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
