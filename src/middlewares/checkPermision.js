import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import ApiError from "../utils/ApiError.js";

const checkPermission = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) throw new ApiError(StatusCodes.UNAUTHORIZED, "UNAUTHORIZED");

        // Giải mã token
        const data = jwt.verify(token, "token");
        const user = await User.findById(data.id);
        if (!user) throw new ApiError(StatusCodes.NOT_FOUND, "User Not Found");

        // Kiểm tra vai trò của người dùng
        if (user.role !== "admin") throw new ApiError(StatusCodes.FORBIDDEN, "Bạn Không có quyền");

        res.locals.userId = user._id;
        next();
    } catch (error) {
        next(error);
    }
};

export default checkPermission;
