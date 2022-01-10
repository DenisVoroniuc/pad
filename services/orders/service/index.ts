import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import { OrderDocument, Order } from "../model";

export const createOrder = async (
  data: DocumentDefinition<OrderDocument>,
): Promise<
  OrderDocument & {
    _id: any;
  }
> => {
  try {
    return await Order.create(data);
  } catch (error) {
    throw new Error((error as { message: string }).message);
  }
};

export const getOrders = async () => Order.find();

export const findOrder = async (query: FilterQuery<OrderDocument>) => Order.findOne(query).lean();

export const editOrder = (
  query: FilterQuery<OrderDocument>,
  update: UpdateQuery<OrderDocument>,
  options: QueryOptions,
) => Order.findOneAndUpdate(query, update, options);

export const deleteOrder = async (query: FilterQuery<OrderDocument>) => Order.deleteOne(query);
