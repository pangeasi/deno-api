import { PostgresConnector, Database } from "../deps/denodb.ts";
import { User } from "./user.ts";

const connection = new PostgresConnector({
  host: Deno.env.get("DB_HOST") || "127.0.0.1",
  database: Deno.env.get("DATABASE") || "postgres",
  port: +Deno.env.get("DB_PORT")! || 5432,
  username: Deno.env.get("DB_USER") || "postgres",
  password: Deno.env.get("DB_PASSWORD") || "",
});

const db = new Database(connection);

export default db;
