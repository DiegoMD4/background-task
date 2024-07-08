import express from "express";
import taskRoutes from "./src/Routes/task.js";
import morgan from "morgan";
import cors from "cors";

//application settings
const app = express();
app.set("PORT", process.env.PORT || 4000);

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
    console.log(`Server started at http://localhost:${app.get("PORT")}`);
});

