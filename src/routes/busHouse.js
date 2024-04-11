import { Router } from "express";
import BusHouseController from "../controllers/busHouse.js";
import checkPermission from "../middlewares/checkPermision.js";
const busHouseRouter = Router();

busHouseRouter.get("/", BusHouseController.getAllBusHouse);
busHouseRouter.get("/:id", BusHouseController.getDetailBusHouse);
busHouseRouter.post("/", checkPermission, BusHouseController.CreateBusHouse);
busHouseRouter.put("/:id", BusHouseController.UpdateBusHouse);
busHouseRouter.delete("/:id", BusHouseController.DeleteBusHouse);

export default busHouseRouter;
