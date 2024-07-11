import express from "express";
import taskRoutes from "./src/Routes/task.js";
import morgan from "morgan";
import cors from "cors";
import * as path from 'path'
import { dirname } from "path";
import { fileURLToPath } from "url";

//application settings
const app = express();
app.set("PORT", process.env.PORT || 4000);
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname , "/src/views"));

app.set("view engine", "ejs");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/task", taskRoutes);

//server initialization
app.listen(app.get("PORT"), (req, res) => {
    console.log(`🟢 Server started at http://localhost:${app.get("PORT")}`);
});
