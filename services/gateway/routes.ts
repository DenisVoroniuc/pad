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

  app.all("/:serviceName/:path", (request: Request, response: Response) => {
    // log.warn(request.params);
    if (registry.services.hasOwnProperty(request.params.serviceName)) {
      //here i ignore ts error cause in the previous check I found that object `registry.services` has `request.params.serviceName` property
      //@ts-expect-error
      const url = (registry.services[request.params.serviceName as string].url + "/" + request.params.path) as string;
      log.warn(request.method);
      log.warn(url);

      axios(url, {
        method: request.method as Method,
        headers: request.headers as AxiosRequestHeaders,
        data: request.body,
      })
        .then(r => {
          response.send(r.data);
        })
        .catch(r => {
          response.send(r.data);
        });
    } else {
      response.send(404);
    }
  });
};
