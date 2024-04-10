import { Router } from "express";
import StationsController from "../../controllers/stations";
import { uploadImage } from "../../config/cloudinaryConfig";
const stationsRouter = Router();

stationsRouter.get("/", StationsController.getAllStations);
stationsRouter.get("/:id", StationsController.getDetailStation);
stationsRouter.post("/", uploadImage.single("image"), StationsController.CreateStations);
stationsRouter.put("/:id", StationsController.UpdateStations);
stationsRouter.delete("/:id", StationsController.DeleteStations);

export default stationsRouter;
