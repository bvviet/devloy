import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TripsSchema = new Schema({
    fromStations: {
        type: Schema.Types.ObjectId,
        ref: "stations",
    },
    toStations: {
        type: Schema.Types.ObjectId,
        ref: "stations",
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    seats: {
        type: Number,
        min: 3,
    },
    price: {
        type: Number,
    },
    busHouseId: {
        type: Schema.Types.ObjectId,
        ref: "busHouse",
        Stations: {
            type: Schema.Types.ObjectId,
            ref: "stations",
        },
    },
});

const Trips = mongoose.model("trips", TripsSchema);
export default Trips;
