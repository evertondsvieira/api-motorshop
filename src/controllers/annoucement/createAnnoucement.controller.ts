import createAnnoucementService from "../../services/annoucement/createAnnoucement.service";
import { Request, Response } from "express";
import { IAnnoucement } from "../../interfaces/annoucement/index"


const createAnnoucementController = async (req: Request, res: Response) => {
    const annoucement: IAnnoucement = req.body
    const userId = req.params.userId

    const createAnnoucement = await createAnnoucementService(annoucement, userId)

    return res.status(201).json(createAnnoucement)
}

export default createAnnoucementController