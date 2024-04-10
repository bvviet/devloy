import { Router } from "express";
import ImageController from "../controllers/images";
import { uploadImage } from "../config/cloudinaryConfig";

const imageRouter = Router();

imageRouter.post("/cloud", uploadImage.single("image"), ImageController.uploadSingleImage);
imageRouter.delete("/cloud/:id", uploadImage.single("image"), ImageController.deleteImage);

export default imageRouter;
