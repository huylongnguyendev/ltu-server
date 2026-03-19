import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class CommonHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.set("X-Powered-By", "LTU-API");
    res.set("X-System-Status", "Operational");
    res.set("Content-Type", "application/json; charset=utf-8");
    next();
  }
}
