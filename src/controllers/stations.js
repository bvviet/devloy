import { json } from "express";
import stations from "../models/StationModel.js";
class StationsController {
    // GetAll
    async getAllStations(req, res) {
        try {
            const station = await stations.find();
            res.status(200).json({
                message: "Get done",
                data: station,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // GetDetail
    async getDetailStation(req, res) {
        try {
            const station = await stations.findById(req.params.id);
            if (!station) {
                return res.station(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Get detail done",
                data: station,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // create
    async CreateStations(req, res) {
        console.log(req.file, req.body);
        try {
            const station = await stations.create({ ...req.body, image: req.file.path });
            res.status(200).json({
                message: "Create done",
                data: station,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    // Update
    async UpdateStations(req, res) {
        try {
            const station = await stations.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!station) {
                return res.status(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Update done",
                data: station,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Delete
    async DeleteStations(req, res) {
        try {
            const station = await stations.findByIdAndDelete(req.params.id);
            if (!station) {
                return res.status(404).json({
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
export default new StationsController();
