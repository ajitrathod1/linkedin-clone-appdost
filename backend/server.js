const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // allow frontend
    credentials: true,
  })
);

// ✅ Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ LinkedIn Clone Backend Running...");
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("🚀 Server running on port", process.env.PORT || 5000)
    );
  })
  .catch((err) => console.error("❌ DB Connection Failed:", err));
