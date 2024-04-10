import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BusHouseSchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    stations: {
        type: [Schema.Types.ObjectId],
        ref: "stations",
        required: true,
    },
});

const BusHouse = mongoose.model("busHouse", BusHouseSchema);
export default BusHouse;
