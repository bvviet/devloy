import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
    },
});

const User = mongoose.model("users", UserSchema);
export default User;
