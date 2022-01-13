const user = process.env.APP_USERS_USER_DB ?? "denis";
const password = process.env.APP_USERS_PASS_DB ?? "padUserPass";
const port = parseInt(process.env.APP_ORDERS_PORT ?? "3001");
const host = process.env.APP_ORDERS_HOST ?? "localhost";

export const defaultConfig = {
  port,
  host,
  dbUrl: `mongodb+srv://${user}:${password}@cluster0.a7vad.mongodb.net/order?retryWrites=true&w=majority`,
};
