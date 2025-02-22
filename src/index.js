import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"; // ✅ Ensure `.js` is included if using ES Modules

dotenv.config(); // ✅ Load environment variables

console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // ✅ Debugging line

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Register API Routes
app.use("/api/auth", authRoutes);

// ✅ Debugging: Log registered routes
setTimeout(() => {
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
}, 3000); // Delay to ensure routes are fully registered

// ✅ Connect to DB before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("❌ Failed to connect to DB:", err);
});
