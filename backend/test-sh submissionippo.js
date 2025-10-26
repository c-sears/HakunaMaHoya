require('dotenv').config();
const axios = require('axios');

const testData = {
  toAddress: {
    name: "John Doe",
    street1: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "US",
    phone: "+1234567890",
    email: "john@example.com"
  },
  fromAddress: {
    name: "Jane Smith",
    street1: "456 Oak Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "US",
    phone: "+1234567890",
    email: "jane@example.com"
  },
  parcels: [{
    length: "5",
    width: "4",
    height: "3",
    weight: "16",
    weight_unit: "oz",
    mass_unit: "oz"
  }]
};

async function testRates() {
  try {
    console.log('Testing Shippo API...');
    console.log('API Key:', process.env.SHIPPO_API_KEY ? 'Present' : 'Missing');
    
    const response = await axios.post('http://localhost:8000/api/labels/rates', testData);
    console.log('✅ Success:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

testRates();

