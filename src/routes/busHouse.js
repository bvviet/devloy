import { Router } from "express";
import BusHouseController from "../controllers/busHouse.js";
import checkPermission from "../middlewares/checkPermision.js";
const busHouseRouter = Router();

busHouseRouter.get("/", BusHouseController.getAllBusHouse);
busHouseRouter.get("/:id", BusHouseController.getDetailBusHouse);
busHouseRouter.post("/", BusHouseController.CreateBusHouse);
busHouseRouter.put("/:id", checkPermission, BusHouseController.UpdateBusHouse);
busHouseRouter.delete("/:id", checkPermission, BusHouseController.DeleteBusHouse);

export default busHouseRouter;
