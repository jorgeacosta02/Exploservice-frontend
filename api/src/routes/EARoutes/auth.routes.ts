import { Router } from "express";
import { signUp, logIn } from "../../controllers/EAControllers/user.controller";

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);

export default router;