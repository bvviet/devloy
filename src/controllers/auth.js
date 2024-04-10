import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import { registerValidate, loginValidate } from "../validations/validationAuth";
class AuthController {
    async getAllUser(req, res) {
        try {
            const user = await User.find();
            res.status(200).json({
                message: "Get done",
                data: user,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }

    async register(req, res) {
        try {
            // B1 validate
            const { username, email, password, role } = req.body;
            const { error } = registerValidate.validate(req.body);
            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({
                    message: errors,
                });
            }
            // B2 check email
            const emailExist = await User.findOne({ email });
            if (emailExist) {
                return res.status(400).json({
                    message: "Email đã được đăng ký",
                });
            }
            // B3 ma hoa password
            const hashPassword = await bcryptjs.hash(password, 8); // Sử dụng await để đợi kết quả trả về từ bcryptjs.hash()
            // B4 create
            const user = await User.create({
                username,
                email,
                password: hashPassword,
                role,
            });
            // B5 remove password
            res.status(200).json({
                message: "Create done",
                data: { ...user.toObject(), password: undefined },
            });
        } catch (error) {
            // Xử lý lỗi nếu có
            res.status(500).json({
                message: "Đã xảy ra lỗi trong quá trình đăng ký",
                error: error.message,
            });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            // B1 validator
            const { error } = loginValidate.validate(req.body);
            if (error) {
                const errors = error.details.map((err) => err.message);
                return res.status(400).json({
                    message: errors,
                });
            }
            // B2 check Email
            const emailExist = await User.findOne({ email });
            if (!emailExist) {
                return res.status(400).json({
                    message: "Email không đúng",
                });
            }
            // B3 So sanh password
            const checkPassword = bcryptjs.compareSync(password, emailExist.password);
            if (!checkPassword) {
                return res.status(400).json({
                    message: "Mật khẩu không đúng",
                });
            }
            // B4 Ma hoa token
            const token = Jwt.sign({ id: emailExist._id }, "token", { expiresIn: "1h" });
            // B5 Login
            res.status(200).json({
                message: "Đăng nhập thành công",
                data: { ...emailExist.toObject(), password: undefined },
                token,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}
export default new AuthController();
