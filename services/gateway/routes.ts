import { Express, Request, Response } from "express";
import axios from "axios";
import { registry } from "../common/registry";
import { log } from "../common/logger";
import { RedisClient } from "./app";

const defaultExpiration = 3600;

export const routes = (app: Express, redisClient: RedisClient) => {
  /**
   *  HealthCheck
   *  /healthcheck
   */
  app.get("/healthcheck", (request: Request, response: Response) => response.sendStatus(200));
  /**
   * base root
   */
  app.get("/", (req, resp, next) => resp.send("this is the base root of the gateway"));
  /**
   * gateway logic
   */
  app.all("/:serviceName/:path", async (request: Request, response: Response, next) => {
    if (registry.services.hasOwnProperty(request.params.serviceName)) {
      //here i ignore ts error cause in the previous check I found that object `registry.services` has `request.params.serviceName` property
      //@ts-expect-error
      const url = (registry.services[request.params.serviceName as string].url + "/" + request.params.path) as string;

      switch (request.method) {
        case "POST":
        case "post":
          axios.post(url, request.body).then(r => response.send(r.data));
          break;
        case "GET":
        case "get":
          {
            const redisData = await redisClient.get(request.params.serviceName);

            if (redisData !== null) {
              log.info("got from redis")
              return response.send(JSON.parse(redisData));
            } else {
              
              axios.get(url).then(r => {
                redisClient.setEx(request.params.serviceName, defaultExpiration, JSON.stringify(r.data));
                log.info("got from server")
                return response.send(r.data);
              });
            }
          }
          break;
        case "DELETE":
        case "delete":
          axios.delete(url, request.body).then(r => response.send(r.data));
          break;
        case "PUT":
        case "put":
          axios.put(url, request.body).then(r => response.send(r.data));
          break;
      }
    } else {
      return response.send(404);
    }
  });
};
