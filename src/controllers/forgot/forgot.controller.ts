import { Request, Response } from "express";
import { forgotPassword } from "../../services/forgot/forgot.service";

export async function forgotPasswordController(req: Request, res: Response) {
  const { email } = req.body;
  try {
    const message = await forgotPassword(email);
    return res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
}