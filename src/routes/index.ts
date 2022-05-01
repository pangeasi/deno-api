import { Router } from "../deps/oak.ts";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.ts";

const router = new Router();

export default router
  .get("/", getUsers)
  .get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/user", createUser)
  .patch("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
