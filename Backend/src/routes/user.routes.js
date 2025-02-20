import {Router} from 'express';
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validator';

const router = Router();

router.post("/register",
    body("username").isLength({ min: 3 }).withMessage("Username must be at least 3 characters long"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").isLength({ min: 3 }).withMessage("Password must be at least 3 characters long"),
    userController.createUserController);

export default router;