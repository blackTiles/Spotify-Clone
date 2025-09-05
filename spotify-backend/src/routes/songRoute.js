import express from "express";
import {
  addSong,
  listSong,
  removeSong,
} from "../controllers/songController.js";
import upload from "../middleware/multer.js";
import { verifyToken } from "../controllers/authController.js";

const songRouter = express.Router();

songRouter.post(
  "/add",
  verifyToken,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSong);
songRouter.post("/remove", verifyToken, removeSong);

export default songRouter;
