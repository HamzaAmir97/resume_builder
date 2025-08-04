import express from "express";

import {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
} from  "../controllers/resumeController";
import { protect } from"../middlewares/authMiddleware";
import { uploadResumeImages } from"../controllers/uploadImages";

const router = express.Router();

router.post("/", protect, createResume);        // Create Resume
router.get("/", protect, getUserResumes);       // Get Resume
router.get("/:id", protect, getResumeById);     // Get Resume By ID
router.put("/:id", protect, updateResume);      // Update Resume
router.put("/:id/upload-images", protect, uploadResumeImages);
router.delete("/:id", protect, deleteResume);   // Delete Resume

export default router;