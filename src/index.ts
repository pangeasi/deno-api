import { Application } from "./deps/oak.ts";
import router from "./routes/index.ts";
import db from "./db/config.ts";
import { validationsMiddleware } from "./middlewares/validations.ts";
import { User } from "./db/user.ts";

const app = new Application();

await db.link([User]);
await db.sync({
  drop: false,
});

app.use(validationsMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.addEventListener("listen", ({ port }) => {
  console.log(`Server running on http://localhost:${port}`);
});
await app.listen({ port: +Deno.env.get("PORT")! || 8000 });
