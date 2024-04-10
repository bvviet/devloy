import { Router } from "express";
import TripsController from "../controllers/trips";
const tripsRouter = Router();

tripsRouter.get("/", TripsController.getAllTrips);
tripsRouter.post("/search", TripsController.getTrip);
tripsRouter.get("/:id", TripsController.getDetailTrips);
tripsRouter.post("/", TripsController.CreateTrips);
tripsRouter.put("/:id", TripsController.UpdateTrips);
tripsRouter.delete("/:id", TripsController.DeleteTrips);

export default tripsRouter;
