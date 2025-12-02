import express from "express";
import { 
  getLearningPaths,
  getCourses,
  getLevels,
  getTutorials 
} from "../controllers/learningBuddyController.js";

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.json({ message: "API WORKING!" });
});

// API ROUTES
router.get("/learning-paths", getLearningPaths);
router.get("/courses", getCourses);
router.get("/levels", getLevels);
router.get("/tutorials", getTutorials);

export default router;
