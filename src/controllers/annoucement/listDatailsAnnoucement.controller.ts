import listDatailsAnnoucementsService from "../../services/annoucement/listDatailsAnnoucement.service";
import { Request, Response } from "express";


const listDatailsAnnoucementController = async (req: Request, res: Response) => {
    const { annoucementId } = req.params;
    const annoucement = await listDatailsAnnoucementsService(annoucementId);

    return res.status(200).json(annoucement);
}

export default listDatailsAnnoucementController;