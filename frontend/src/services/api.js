import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * Get shipping rates for a shipment
 */
export const getShippingRates = async (shipmentData) => {
  try {
    const response = await api.post('/api/labels/rates', shipmentData)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get shipping rates')
  }
}

/**
 * Create a shipping label
 */
export const createLabel = async (shipmentData) => {
  try {
    const response = await api.post('/api/labels', shipmentData)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create label')
  }
}

export default api

