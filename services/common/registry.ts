export const registry = {
  services: {
    users: {
      serviceName: "users",
      host: process.env.APP_ORDERS_HOST ?? "localhost",
      port: process.env.APP_ORDERS_PORT ?? "3000",
      url:
        process.env.APP_USERS_HOST || process.env.APP_USERS_PORT
          ? `http://${process.env.APP_USERS_HOST}:${process.env.APP_USERS_PORT}/users`
          : "http://localhost:3000/users",
    },
    orders: {
      serviceName: "orders",
      host: process.env.APP_ORDERS_HOST ?? "localhost",
      port: process.env.APP_ORDERS_PORT ?? "3001",
      url:
        process.env.APP_ORDERS_HOST || process.env.APP_ORDERS_PORT
          ? `http://${process.env.APP_ORDERS_HOST}:${process.env.APP_ORDERS_PORT}/orders`
          : "http://localhost:3001/orders",
    },
  },
};
