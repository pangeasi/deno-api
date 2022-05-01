import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import connect from "./db/config.ts";

connect();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: +Deno.env.get("PORT")! || 8000 });
