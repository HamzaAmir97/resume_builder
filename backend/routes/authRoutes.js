import express from "express";

import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware";
import upload from "../middlewares/uploadMiddleware";

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);   // Register User
router.post("/login", loginUser);       // Login User
router.get("/profile", protect, getUserProfile); // Get User Profile

//cloudinary storage
router.post("/upload-image", async (req, res) => {
    try {
      upload.single("image")(req, res, function (err) {
        if (err) {
          return res.status(400).json({ message: "Upload failed", error: err.message });
        }
  
        if (!req.file) {
          return res.status(400).json({ message: "No file uploaded" });
        }
  
        const imageUrl = req.file.path;
        return res.status(200).json({ imageUrl });
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      res.status(500).json({ message: "Unexpected server error", error: error.message });
    }
  });
  


//local storage
// router.post("/upload-image", upload.single("image"), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded" });
//     }
//     const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
//         req.file.filename
//     }`;
//     res.status(200).json({ imageUrl });
// });

export default router;