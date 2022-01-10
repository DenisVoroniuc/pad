const user = process.env.APP_USERS_USER_DB ?? "denis";
const password = process.env.APP_USERS_PASS_DB ?? "padUserPass";

export const defaultConfig = {
  port: 3001,
  host: "localhost",
  dbUrl: `mongodb+srv://${user}:${password}@cluster0.a7vad.mongodb.net/order?retryWrites=true&w=majority`,
};
