import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";

const authUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing authorization headers");
  }

  token = token.split(" ")[1];

  console.log(process.env.SECRET_KEY);

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError("Unauthorized", 403);
    }

    req.user = {
      id: decoded.id,
      isActive: decoded.isActive,
      isAdvertiser: decoded.isAdvertiser,
    };

    next();
  });
};

export default authUserMiddleware;
