import { Request, Response } from "express";
import { resetPassword } from "../../services/reset/reset.service";

export async function resetPasswordController(req: Request, res: Response) {
  const { id, token, password, password2 } = req.body;
  try {
    const message = await resetPassword(id, token, password, password2);
    return res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
}