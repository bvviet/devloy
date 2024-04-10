import { response } from "express";
import trips from "../models/TripModel";
import tripsValidate from "../validations/validationTrips";
import moment from "moment";
class TripsController {
    // GetAll
    async getAllTrips(req, res) {
        try {
            const trip = await trips
                .find()
                .populate("fromStations")
                .populate("toStations")
                .populate({
                    path: "busHouseId",
                    populate: {
                        path: "stations",
                        model: "stations",
                    },
                });

            res.status(200).json({
                message: "Get done",
                data: trip,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // GetDetail
    async getDetailTrips(req, res) {
        try {
            const trip = await trips
                .findById(req.params.id)
                .populate("fromStations")
                .populate("toStations")
                .populate({
                    path: "busHouseId",
                    populate: {
                        path: "stations",
                        model: "stations",
                    },
                });
            if (!trip) {
                return res.status(404).json({
                    message: "Not get detail",
                });
            }
            res.status(200).json({
                message: "get done",
                data: trip,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    // Get trip
    async getTrip(req, res) {
        try {
            const { fromStations, toStations, startTime } = req.body;
            const starttime = startTime;
            const dateOnly = moment(startTime).format("YYYY-MM-DD");
            console.log("param" + dateOnly);

            const trip = await trips
                .find({
                    fromStations: fromStations,
                    toStations: toStations,
                    startTime: { $gte: new Date(dateOnly), $lt: new Date(dateOnly + "T23:59:59.999Z") },
                })
                .populate("fromStations")
                .populate("toStations")
                .populate({
                    path: "busHouseId",
                    populate: {
                        path: "stations",
                        model: "stations",
                    },
                });

            console.log("sql" + startTime);
            if (!trip) {
                return res.status(404).json({
                    message: "Not Found",
                });
            }

            res.status(200).json({
                message: "Get done",
                data: trip,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    // create
    async CreateTrips(req, res) {
        try {
            // Validation
            const { error } = tripsValidate.validate(req.body);
            console.log(error);
            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({
                    message: errors,
                });
            }
            const trip = await trips.create(req.body);
            res.status(200).json({
                message: "Create done",
                data: trip,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Update
    async UpdateTrips(req, res) {
        try {
            const trip = await trips.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!trip) {
                return res.status(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Update done",
                data: trip,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Delete
    async DeleteTrips(req, res) {
        try {
            const trip = await trips.findByIdAndDelete(req.params.id);
            if (!trip) {
                res.status(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Delete done",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}
export default new TripsController();
