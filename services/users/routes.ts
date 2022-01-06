import { Express, Request, Response } from "express";
import { createUserHandler, editUserHandler, getUsersHandler, deleteUserHandler } from "./controller";
import { validateRequest } from "../common/middleware/validateRequest";
import { createUserSchema, editUserSchema } from "./schema";

export const routes = (app: Express) => {
  /**
   *  HealthCheck
   *  /users/healthcheck
   */
  app.get("/users/healthcheck", (request: Request, response: Response) => response.sendStatus(200));
  /**
   *  Create user
   *  /users/create
   */
  app.post("/users/create", validateRequest(createUserSchema), createUserHandler);

  /**
   *  Edit user
   *  /users/edit/:userId
   */
  app.put("/users/edit/:userId", validateRequest(editUserSchema), editUserHandler);

  /**
   *  Get users
   *  /users
   */
  app.get("/users/get", getUsersHandler);

  /**
   *  Delete user
   *  /users/delete/:userId
   */
  app.delete("/users/delete/:userId", deleteUserHandler);
};
