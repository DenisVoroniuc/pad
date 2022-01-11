import { Express, Request, Response } from "express";
import { validateRequest } from "../common/middleware/validateRequest";
import {
  createOrderHandler,
  getOrdersHandler,
  endOrderHandler,
  startOrderHandler,
  deleteOrderHandler,
} from "./controller";
import { createOrderSchema } from "./schema";

export const routes = (app: Express) => {
  /**
   *  HealthCheck
   *  /orders/healthcheck
   */
  app.get("/orders/healthcheck", (request: Request, response: Response) => response.sendStatus(200));
  /**
   * Create Order
   * /orders/create
   */
  app.post("/orders/create", validateRequest(createOrderSchema), createOrderHandler);
  /**
   *  Start order
   *  /orders/start/:orderId
   */
  app.put("/orders/start/:orderId", startOrderHandler);
  /**
   *  End order
   *  /orders/end/:orderId
   */
  app.put("/orders/end/:orderId", endOrderHandler);
  /**
   * Get Orders List
   * /orders/get
   */
  app.get("/orders/get", getOrdersHandler);
  /**
   * Delete Order
   * /orders/delete/:orderId
   */
  app.delete("/orders/delete/:orderId", deleteOrderHandler);
};
