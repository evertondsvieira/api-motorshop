import listAnnoucementsService from "../../services/annoucement/listAnnoucement.service";
import { Request, Response } from "express";


const listAnnoucementsController = async (req: Request, res: Response) => {
    const { userId } = req.params
    const listAnnoucements = await listAnnoucementsService(userId)
    return res.status(200).json(listAnnoucements);
}


export default listAnnoucementsController;