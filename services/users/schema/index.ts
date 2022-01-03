import { ref } from "yup";
import { string, object } from "yup";

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password should contain 6 symbols minimum")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Only english letters are aloud"),
    passwordConfirmation: string().oneOf([ref("password"), null], "password should match"),
    email: string().email("Must be an email").required("Email is required"),
  }),
});

export const editUserSchema = object({
  body: object({
    name: string(),
    password: string()
      .required("Password is required")
      .min(6, "Password should contain 6 symbols minimum")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Only english letters are aloud"),
    passwordConfirmation: string().oneOf([ref("password"), null], "password should match"),
    email: string().email("Must be an email"),
  }),
});
