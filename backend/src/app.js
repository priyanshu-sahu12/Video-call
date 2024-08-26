import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js"
import exp from "node:constants";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended : true}));

app.use("/api/v1/users", userRoutes);


const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://priyansh7694:BSsyXb28uL9wdst9@cluster0.lquwt6d.mongodb.net/")
    console.log(`MONGO Connected DB Host ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () =>{
        console.log("Server is running on port 8000")
    });
}

start();