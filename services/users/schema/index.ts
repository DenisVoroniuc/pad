import { string, object, ref } from "yup";
import { UserType } from "../model";

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    userType: string()
      .required("User type is required")
      .oneOf([UserType.Client, UserType.Driver], "user must be either driver or client"),
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
    userType: string().oneOf([UserType.Client, UserType.Driver], "user must be either driver or client"),
    password: string()
      .required("Password is required")
      .min(6, "Password should contain 6 symbols minimum")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Only english letters are aloud"),
    passwordConfirmation: string().oneOf([ref("password"), null], "password should match"),
    email: string().email("Must be an email"),
  }),
});
