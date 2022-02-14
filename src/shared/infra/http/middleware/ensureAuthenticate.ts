import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({message: "Token missing"});
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "e5f4117aaaebd85b0ee91c88e2ddd92a") as IPayload;

    request.body.user_id = sub;

    return next();
  }  catch (error) {

    return response.status(401).json({message: "Token missig"});
  }
}
