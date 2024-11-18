import express from "express";
import { getMessages, sendMessage } from "../Controllers/message.Controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//SEND MESSAGES ROUTE
router.post("/send/:id", protectRoute, sendMessage);

//GET MESSAGES ROUTE
router.get("/:id", protectRoute, getMessages);

export default router;
