import express from "express";
import { SignUp, LogIn, LogOut } from "../Controllers/auth.Controller.js";

const router = express.Router();
//Sign Up route
router.post("/signup", SignUp);

//Login Route
router.post("/login", LogIn);

//LogOut Route
router.post("/logout", LogOut);

export default router;
