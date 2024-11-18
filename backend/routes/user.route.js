import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar } from "../Controllers/user.Controller.js";

const router = express.Router();

//get user route
router.get("/", protectRoute, getUserForSidebar);

export default router;
