const shippoService = require('../services/shippoService');

/**
 * Create a shipping label
 */
const createLabel = async (req, res) => {
  try {
    const shipmentData = req.body;
    
    const result = await shippoService.createLabel(shipmentData);
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Error creating label:', error);
    res.status(500).json({
      error: 'Failed to create label',
      message: error.message,
      details: error.detail || error.toString()
    });
  }
};

/**
 * Get shipping rates for a shipment
 */
const getRates = async (req, res) => {
  try {
    const shipmentData = req.body;
    
    const result = await shippoService.getRates(shipmentData);
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting rates:', error);
    res.status(500).json({
      error: 'Failed to get rates',
      message: error.message,
      details: error.detail || error.toString()
    });
  }
};

module.exports = {
  createLabel,
  getRates
};

