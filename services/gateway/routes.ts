import { Express, Request, Response } from "express";
import { log } from "../common/logger";
import axios, { AxiosRequestHeaders, Method } from "axios";
import registry from "../common/registry.json";

export const routes = (app: Express) => {
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
  app.all("/:serviceName/:path", (request: Request, response: Response, next) => {
    if (registry.services.hasOwnProperty(request.params.serviceName)) {
      //here i ignore ts error cause in the previous check I found that object `registry.services` has `request.params.serviceName` property
      //@ts-expect-error
      const url = (registry.services[request.params.serviceName as string].url + "/" + request.params.path) as string;
      log.warn(request.method);
      log.warn(request.body);
      log.warn(request.headers);
      switch (request.method) {
        case "POST":
        case "post":
          axios.post(url, request.body).then(r => response.send(r.data));
          break;
        case "GET":
        case "get":
          axios.get(url).then(r => response.send(r.data));
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
      //  axios(url, {
      //   method: request.method.toLocaleLowerCase() as Method,
      //   headers: request.headers as AxiosRequestHeaders,
      //   data: request.body ,
      // })
      //   .then(r => {
      //     response.send(r.data);
      //   })
      //   .catch(r => {
      //     response.send(r.data);
      //   });
    } else {
      return response.send(404);
    }
  });
};
