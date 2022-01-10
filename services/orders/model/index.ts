import { Schema, model, Document } from "mongoose";
import { nanoid } from "nanoid";

export enum Status {
  Pending = "Pending",
  InProgress = "InProgress",
  Done = "Done",
}
export interface OrderDocument extends Document {
  userId: string;
  startingPoint: string;
  destinationPoint: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    status: { type: String, default: () => Status.Pending },
    userId: { type: Schema.Types.ObjectId, required: true },
    startingPoint: { type: String, required: true },
    destinationPoint: { type: String, required: true },
  },
  { timestamps: true },
);

export const Order = model<OrderDocument>("Orders", OrderSchema);
