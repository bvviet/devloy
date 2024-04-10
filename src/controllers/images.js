import { cloudinary } from "../config/cloudinaryConfig";

class ImageController {
    async uploadSingleImage(req, res) {
        try {
            console.log(req.file);
            if (!req.file) {
                throw new Error("No File Upload222");
            }
            res.status(200).json({
                message: "Upload Ok",
                imageUrl: req.file.path,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async deleteImage(req, res) {
        try {
            const { result } = await cloudinary.uploader.destroy(`FolderImage/${req.params.id}`);
            if (result !== "ok") {
                throw Error(result);
            }
            res.status(200).json({
                message: "Delete Ok",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}

export default new ImageController();
