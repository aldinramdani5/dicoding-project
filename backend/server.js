import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import learningBuddyRoutes from "./routes/learningBuddyRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api", learningBuddyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
