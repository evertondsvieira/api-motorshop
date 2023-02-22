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
    return res.status(401).json({ message: "Não há token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KET as string, (error, decoded: any) => {
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
