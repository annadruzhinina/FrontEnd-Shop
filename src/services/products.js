// Imports
import api from "./apiConfig.js";

// Exports all products
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exports certain product
export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Creates product
export const createProduct = async (ProductData) => {
  try {
    const response = await api.post("/products", ProductData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Updates product
export const updateProduct = async (id, ProductData) => {
  try {
    const response = await api.put(`/products/${id}`, ProductData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Deletes product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};