import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import resumeRoutes from "./routes/resumeRoutes";


const app = express();




// Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);




// Middleware
app.use(express.json());



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);



//INFO: Serve frontend in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Use Uploads Folder
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"), {
        setHeaders: (res, path) => {
            res.set("Access-Control-Allow-Origin", "http://localhost:5173");
        },
    })
);



// Start Server
const PORT = process.env.PORT || 5000;

// connect to dtatabase 
connectDB().then(
    
    app.listen(PORT, () => 
        
        console.log(`Server running on port ${PORT}`)
    )

);

