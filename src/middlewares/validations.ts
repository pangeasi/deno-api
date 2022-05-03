import { Middleware } from "../deps/oak.ts";
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
      try {
        validators[findedRoute.path].parse(body);
      } catch (error) {
        response.status = 400;
        response.body = { ...error };
        return;
      }
    }
  }
  await next();
};
