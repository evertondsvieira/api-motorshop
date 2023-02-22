import listAnnoucementsService from "../../services/annoucement/listAnnoucement.service";
import { Request, Response } from "express";


const listAnnoucementController = async (req: Request, res: Response) => {
    const { userId } = req.params
    const listAnnoucement = await listAnnoucementsService(userId)
    return res.status(200).json(listAnnoucement)
}


export default listAnnoucementController