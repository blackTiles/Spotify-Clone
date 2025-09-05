import express from "express";
import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";
import upload from "../middleware/multer.js";
import { verifyToken } from "../controllers/authController.js";

const albumRouter = express.Router();

albumRouter.post("/add", verifyToken, upload.single("image"), addAlbum);
albumRouter.get("/list", listAlbum);
albumRouter.post("/remove", verifyToken, removeAlbum);

export default albumRouter;
