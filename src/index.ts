import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import db from "./db/config.ts";
import { User } from "./db/user.ts";

await db.link([User]);
await db.sync();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: +Deno.env.get("PORT")! || 8000 });
