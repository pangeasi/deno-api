import { Middleware } from "../deps/oak.ts";
import { validate } from "../deps/validasaur.ts";
import { validators } from "../DTOs/index.ts";
import router from "../routes/index.ts";
export const validationsMiddleware: Middleware = async (
  { request, response },
  next
) => {
  const { method, url } = request;
  const routes = [...router.entries()].flatMap((el) => el[0]);
  const body = await request.body().value;

  if (method === "POST" || method === "PATCH") {
    const findedRoute = routes.find((route) =>
      url.pathname.match(route.regexp)
    );
    if (findedRoute) {
      const [passes, errors] = await validate(body, {
        ...validators[findedRoute.path],
      });
      if (
        Object.keys(body).length !==
        Object.keys(validators[findedRoute.path]).length
      ) {
        response.status = 400;
        response.body = { message: "Invalid body", ...errors };
        return;
      }
      if (!passes) {
        response.status = 400;
        response.body = { errors };
        return;
      }
    }
  }
  await next();
};
