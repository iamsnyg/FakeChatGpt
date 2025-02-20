import userModel from "../models/user.model.js";
// import { createUser } from "../services/user.service";
import { validationResult } from "express-validator";
import * as userServices from "../services/user.service.js";


export const createUserController = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        console.log(req.body);
        const user = await userServices.createUser(req.body);
        const token = await userModel.generateToken();


        return res.status(201).json({ user, token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
        
    }
}