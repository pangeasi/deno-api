import {
  required,
  isEmail,
  minLength,
  ValidationRules,
} from "../deps/validasaur.ts";

export const validators: { [key: string]: ValidationRules } = {
  "/login": {
    email: [required, isEmail],
    password: [required, minLength(8)],
  },
  "/user": {
    name: [required],
    lastName: [required],
    age: [required],
    email: [required, isEmail],
    password: [required, minLength(8)],
  },
};
