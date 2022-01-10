import { Request, Response } from "express";
import { createOrder, findOrder, getOrders, editOrder, deleteOrder } from "../service";
import { omit } from "lodash";
import { log } from "../../common/logger";
import { Status } from "../model";

export const createOrderHandler = async (request: Request, response: Response) => {
  try {
    const order = await createOrder(request.body);
    return response.send(omit(order.toJSON(), "_id"));
  } catch (error) {
    log.error(error);
    return response.status(409).send((error as { message: string }).message);
  }
};

export const getOrdersHandler = async (request: Request, response: Response) => {
  try {
    const orders = await getOrders();
    return response.send(orders.map(order => omit(order.toJSON(), "_id")));
  } catch (error) {
    log.error(error);
    return response.status(409).send((error as { message: string }).message);
  }
};

export const startOrderHandler = async (request: Request, response: Response) => {
  const { orderId } = request.params;

  try {
    const order = await findOrder({ orderId });
    if (!order) {
      return response.sendStatus(404);
    }
    const updatedOrder = await editOrder({ orderId }, { status: Status.InProgress }, { new: true });
    return response.send(updatedOrder);
  } catch (error) {
    log.error(error);
    return response.status(409).send((error as { message: string }).message);
  }
};

export const endOrderHandler = async (request: Request, response: Response) => {
  const { orderId } = request.params;

  try {
    const order = await findOrder({ orderId });
    if (!order) {
      return response.sendStatus(404);
    }
    const updatedOrder = await editOrder({ orderId }, { status: Status.Done }, { new: true });
    return response.send(updatedOrder);
  } catch (error) {
    log.error(error);
    return response.status(409).send((error as { message: string }).message);
  }
};

export const deleteOrderHandler = async (request: Request, response: Response) => {
  const {
    params: { orderId },
  } = request;
  const order = findOrder({ orderId });
  if (!order) {
    return response.sendStatus(404);
  }
  await deleteOrder({ orderId });

  return response.sendStatus(200);
};
