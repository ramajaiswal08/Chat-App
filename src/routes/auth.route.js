import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// ✅ Add a debug log to check if the request reaches this route
router.post("/signup", (req, res, next) => {
  console.log("✅ Signup route hit"); // 🔍 Debugging log
  next(); // Pass the request to the actual `signup` controller
}, signup);

router.post("/login", (req, res) => {
  console.log("✅ Login route hit");
  login(req, res);
});

router.post("/logout", (req, res) => {
  console.log("✅ Logout route hit");
  logout(req, res);
});

export default router;
