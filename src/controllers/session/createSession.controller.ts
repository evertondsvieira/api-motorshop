import { IUserLogin } from "../../interfaces/user";
import { Request, Response } from "express";
import createSessionService from "../../services/session/createsSession.service";

const createSessionController = async (req: Request, res: Response) => {
    const session: IUserLogin = req.body;

    const token = await createSessionService(session);

    return res.status(200).json(token);
};

export { createSessionController };