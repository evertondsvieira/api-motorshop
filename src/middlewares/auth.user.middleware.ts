import { Request, Response, NextFunction } from "express";
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
      return res.status(401).json({ message: "token inválido" });
    }

    req.user = {
      id: decoded.id,
      isActive: decoded.isActive,
      isAdvertiser: decoded.isAdvertiser,
    };

    return next();
  });
};

export default authUserMiddleware;
