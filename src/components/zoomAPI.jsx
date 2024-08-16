// src/zoomApi.js
import axios from 'axios';

// Replace with your JWT token
const JWT_TOKEN = 'YOUR_JWT_TOKEN';

// Zoom API base URL
const API_BASE_URL = 'https://api.zoom.us/v2';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const createMeeting = async (topic, startTime, duration) => {
  try {
    const response = await axiosInstance.post('/users/me/meetings', {
      topic,
      type: 2, // Scheduled meeting
      start_time: startTime,
      duration, // in minutes
      timezone: 'America/Los_Angeles'
    });
    return response.data;
  } catch (error) {
    console.error('Error creating meeting', error);
    throw error;
  }
};