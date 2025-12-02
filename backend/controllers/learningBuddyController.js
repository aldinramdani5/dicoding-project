import {
    fetchLearningPaths,
    fetchCourses,
    fetchLevels,
    fetchTutorials
  } from "../services/learningBuddyService.js";
  
  export const getLearningPaths = async (req, res) => {
    const data = await fetchLearningPaths();
    res.json(data);
  };
  
  export const getCourses = async (req, res) => {
    const data = await fetchCourses();
    res.json(data);
  };
  
  export const getLevels = async (req, res) => {
    const data = await fetchLevels();
    res.json(data);
  };
  
  export const getTutorials = async (req, res) => {
    const data = await fetchTutorials();
    res.json(data);
  };
  