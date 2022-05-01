import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import db, { User } from "./db/config.ts";

db.link([User]);
db.sync();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: 8000 });
