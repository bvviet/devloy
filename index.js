import express from "express";
import connectMongoDB from "./src/config/dbconfig.js";
import router from "./src/routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// create db_nodejs in MongoDB
const dbUrl = process.env.DB_URL;
connectMongoDB(dbUrl);
app.use("/", router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
