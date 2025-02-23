<<<<<<< HEAD
import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Add a debug log to check if the request reaches this route
router.post("/signup",  signup);

router.post("/login", (req, res) => {
  console.log("✅ Login route hit");
  login(req, res);
});

router.post("/logout", (req, res) => {
  console.log("✅ Logout route hit");
  logout(req, res);
});

router.put("/update-profile",protectRoute,updateProfile);


export default router;
=======
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
>>>>>>> 108db9fb6070fdfbcdcff7aa7def3a218930971f
