import express from "express";
import multer from "multer";
import { supabase } from "../supabase.js";

const router = express.Router();

// Store file in memory
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No image selected",
      });
    }

    const fileName = `${Date.now()}-${file.originalname}`;

    const { error } = await supabase.storage
      .from("profile-images")
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from("profile-images")
      .getPublicUrl(fileName);

    res.json({
      success: true,
      message: "Image Uploaded Successfully",
      imageUrl: data.publicUrl,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;