import express from "express";
import { supabase } from "../supabase.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const { data, error } =
      await supabase.auth.admin.listUsers();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    res.json({
      success: true,
      users: data.users
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

export default router;