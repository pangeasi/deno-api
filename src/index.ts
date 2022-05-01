import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import connect from "./db/config.ts";
import { config } from "./deps/dotenv.ts";

await connect();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: +config()["PORT"] || 8000 });
