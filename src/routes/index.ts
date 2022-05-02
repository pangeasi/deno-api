import { Router } from "../deps/oak.ts";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.ts";
import { home } from "../controller/index.ts";
const router = new Router();

export default router
  // home page
  .get("/", home)
  // User
  .get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/user", createUser)
  .patch("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
