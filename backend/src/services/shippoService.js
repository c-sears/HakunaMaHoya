const shippo = require('../config/shippo');

/**
 * Create a shipping label using Shippo API
 */
const createLabel = async (shipmentData) => {
  try {
    const { rate } = shipmentData;

    if (!rate) {
      throw new Error('Rate object_id is required');
    }

    // Purchase label using the rate object_id
    const label = await shippo.transaction.create({
      rate: rate,
      async: false
    });

    return {
      success: true,
      label_url: label.label_url,
      tracking_number: label.tracking_number,
      tracking_url_provider: label.tracking_url_provider,
      label: label
    };
  } catch (error) {
    console.error('Shippo error:', error);
    if (error.response) {
      throw new Error(error.response.data?.detail || error.response.data?.message || 'Shippo API error');
    }
    throw error;
  }
};

/**
 * Get shipping rates for a shipment
 */
const getRates = async (shipmentData) => {
  try {
    const { toAddress, fromAddress, parcels } = shipmentData;

    const addressTo = await shippo.address.create(toAddress);
    const addressFrom = await shippo.address.create(fromAddress);

    // Add distance_unit to each parcel if not present
    const parcelsWithUnits = parcels.map(parcel => ({
      ...parcel,
      distance_unit: parcel.distance_unit || 'in'
    }));

    const shipment = await shippo.shipment.create({
      address_to: addressTo,
      address_from: addressFrom,
      parcels: parcelsWithUnits,
      async: false
    });

    if (shipment.status === 'SUCCESS' && shipment.rates && shipment.rates.length > 0) {
      return {
        success: true,
        rates: shipment.rates
      };
    } else {
      throw new Error('Failed to get rates: ' + JSON.stringify(shipment.messages));
    }
  } catch (error) {
    console.error('Shippo error:', error);
    if (error.response) {
      throw new Error(error.response.data?.detail || error.response.data?.message || 'Shippo API error');
    }
    throw error;
  }
};

module.exports = {
  createLabel,
  getRates
};

