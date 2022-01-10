import { string, object } from "yup";

export const createOrderSchema = object({
  body: object({
    userId: string().required("User id is required"),
    startingPoint: string().required("Starting point is required"),
    destinationPoint: string().required("Destination point is required"),
  }),
});
