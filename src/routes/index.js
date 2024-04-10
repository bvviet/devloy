import { Router } from "express";
import authRouter from "./auth.js";
import busHouse from "./busHouse.js";
import stations from "./stations.js";
import trips from "./trips.js";
import imageRouter from "./image.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("Home");
});
router.use("/auth", authRouter);
router.use("/busHouse", busHouse);
router.use("/stations", stations);
router.use("/trips", trips);
router.use("/images", imageRouter);

export default router;
