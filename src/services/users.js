// Import API
import api from "./apiConfig.js";

// Exports all users
export const getUsers = async () => {
  try {
    const response = await api.get("/Users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Export certain user
export const getUser = async (id) => {
  try {
    const response = await api.get(`/Users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Creates user
export const createUser = async (UserData) => {
  try {
    const response = await api.post("/Users", UserData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Updates user
export const updateUser = async (id, UserData) => {
  try {
    const response = await api.put(`/Users/${id}`, UserData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Deletes user
export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/Users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};