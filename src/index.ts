import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import db, { User } from "./db/config.ts";
import { config } from "./deps/dotenv.ts";

await db.link([User]);
await db.sync();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: +config()["PORT"] || 8000 });
