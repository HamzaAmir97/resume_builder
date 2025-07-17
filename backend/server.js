require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB= require("./config/db");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");


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

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    const buildPath = path.join(__dirname, "../frontend/build");
    app.use(express.static(buildPath));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(buildPath, "index.html"));
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

