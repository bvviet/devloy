import { types } from "joi";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StationSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    province: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    },
});

const Stations = mongoose.model("stations", StationSchema);
export default Stations;
