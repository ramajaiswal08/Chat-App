import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" }); // Ensure dotenv loads correctly

console.log("🔍 MONGO_URI:", process.env.MONGO_URI || "⚠️ Not Found! Check your .env file"); // Debugging line

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// Register API Routes
app.use("/api/auth", authRoutes);

// Route Debugging
setTimeout(() => {
  if (!app._router || !app._router.stack) {
    console.warn("⚠️ No routes registered yet.");
    return;
  }
  console.log("🔍 Registered Routes:");
  app._router.stack.forEach((layer) => {
    if (layer.route) {
      console.log(`✅ ${Object.keys(layer.route.methods).join(", ").toUpperCase()} ${layer.route.path}`);
    } else if (layer.name === "router") {
      layer.handle.stack.forEach((subLayer) => {
        if (subLayer.route) {
          console.log(`✅ ${Object.keys(subLayer.route.methods).join(", ").toUpperCase()} ${subLayer.route.path}`);
        }
      });
    }
  });
}, 3000);

// Connect to DB before starting server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
