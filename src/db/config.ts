import { PostgresConnector, Database } from "../deps/denodb.ts";
import { config } from "../deps/dotenv.ts";
import { User } from "./user.ts";

const connect = () => {
  console.log(config());
  /* const connection = new PostgresConnector({
    host: config()["DB_HOST"] || "127.0.0.1",
    database: config()["DATABASE"] || "postgres",
    port: +config()["DB_PORT"] || 5432,
    username: config()["DB_USER"] || "postgres",
    password: config()["DB_PASSWORD"] || "",
  });

  const db = new Database(connection);
  await db.link([User]);
  await db.sync();
  return await db; */
};
export default connect;
