import BusHouse from "../models/BusHouseModel";
class BusHouseController {
    // GetAll
    async getAllBusHouse(req, res) {
        try {
            const busHouse = await BusHouse.find().populate("stations");
            res.status(200).json({
                message: "Get done",
                data: busHouse,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // GetDetail
    async getDetailBusHouse(req, res) {
        try {
            const busHouse = await BusHouse.findById(req.params.id).populate("stations");
            if (!busHouse) {
                return res.status(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Get detail done",
                data: busHouse,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // create
    async CreateBusHouse(req, res) {
        try {
            const busHouse = await BusHouse.create(req.body);
            res.status(200).json({
                message: "Create done",
                data: busHouse,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Update
    async UpdateBusHouse(req, res) {
        try {
            const busHouse = await BusHouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!busHouse) {
                return res.status(404).json({
                    message: "Not Found",
                });
            }
            res.status(200).json({
                message: "Update done",
                data: busHouse,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Delete
    async DeleteBusHouse(req, res) {
        try {
            const busHouse = await BusHouse.findByIdAndDelete(req.params.id);
            if (!busHouse) {
                return res.status(404).json({
                    message: "Not found",
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
export default new BusHouseController();
