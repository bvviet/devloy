import { Router } from "express";
import ImageController from "../controllers/images.js";
import { uploadImage } from "../config/cloudinaryConfig.js";

const imageRouter = Router();

imageRouter.post("/cloud", uploadImage.single("image"), ImageController.uploadSingleImage);
imageRouter.delete("/cloud/:id", uploadImage.single("image"), ImageController.deleteImage);

export default imageRouter;
