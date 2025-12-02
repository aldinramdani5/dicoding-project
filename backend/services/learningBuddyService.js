import axios from "axios";

const BASE = process.env.API_BASE_URL;
const KEY = process.env.SUPABASE_API_KEY;

const headers = {
  apiKey: KEY,
  Authorization: `Bearer ${KEY}`,
};

export const fetchLearningPaths = async () => {
  const { data } = await axios.get(`${BASE}/learning_paths`, { headers });
  return data;
};

export const fetchCourses = async () => {
  const { data } = await axios.get(`${BASE}/courses`, { headers });
  return data;
};

export const fetchLevels = async () => {
  const { data } = await axios.get(`${BASE}/course_levels`, { headers });
  return data;
};

export const fetchTutorials = async () => {
  const { data } = await axios.get(`${BASE}/tutorials`, { headers });
  return data;
};
