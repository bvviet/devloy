import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: "dhpx7hzru",
    api_key: "352655364885478",
    api_secret: "ril6IYi_xIdd8GRqO0VnfSwZ_Y0",
});

//

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "jpeg", "png"],
    params: {
        folder: "FolderImage",
    },
});

const uploadImage = multer({ storage });

export { uploadImage, cloudinary };
