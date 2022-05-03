import { string, number, object, AnyZodObject } from "../deps/zod.ts";

export const validators: { [key: string]: AnyZodObject } = {
  "/login": object({
    email: string().email(),
    password: string().min(8),
  }).strict(),
  "/user": object({
    name: string(),
    lastName: string(),
    age: number().min(0).max(150),
    email: string().email(),
    password: string().min(8),
  }).strict(),
  "/user/:id": object({
    name: string().nullable(),
    lastName: string().nullable(),
    age: number().min(0).max(150).nullable(),
    email: string().email().nullable(),
    password: string().min(8).nullable(),
  })
    .partial()
    .strict(),
};
