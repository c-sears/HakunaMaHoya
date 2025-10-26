# Hakuna MaHoya - Product Label App

A web application for creating shipping labels using the Shippo API. This full-stack application allows users to enter shipping details, view available shipping rates, and create downloadable shipping labels.

## Features

- 📦 Create shipping labels for packages
- 💰 View available shipping rates from multiple carriers
- 📋 Enter detailed shipment information (to/from addresses, parcel dimensions)
- 📥 Download shipping labels as PDF
- 🎫 Get tracking numbers and tracking URLs
- 🎨 Modern, responsive UI built with React and Tailwind CSS

## Tech Stack

### Backend
- **Node.js** with Express
- **Shippo API** for shipping label creation
- RESTful API architecture

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Axios** for API calls
- Modern responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Shippo API key ([Get one here](https://app.goshippo.com/api/auth/login/))

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```bash
   cp .env.example .env
   ```

4. Add your Shippo API key to the `.env` file:
   ```
   SHIPPO_API_KEY=your_actual_api_key_here
   PORT=8000
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory (in a new terminal):
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (optional, defaults to localhost:5000):
   ```bash
   cp .env.example .env
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:3000` (or another port if 3000 is in use)

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Fill in the shipping form:
   - **Ship To**: Recipient's address
   - **Ship From**: Sender's address
   - **Parcel Details**: Dimensions and weight
3. Click "Get Shipping Rates"
4. Review available shipping rates
5. Select a rate to purchase the label
6. Download your shipping label as a PDF

## Project Structure

```
HakunaMaHoya/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── shippo.js          # Shippo configuration
│   │   ├── controllers/
│   │   │   └── labelController.js  # API controllers
│   │   ├── routes/
│   │   │   └── labelRoutes.js      # API routes
│   │   ├── services/
│   │   │   └── shippoService.js    # Shippo business logic
│   │   └── server.js               # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ShippingForm.jsx    # Form for shipment details
│   │   │   ├── RateSelector.jsx    # Rate selection UI
│   │   │   └── LabelDisplay.jsx # Label display and download
│   │   ├── services/
│   │   │   └── api.js              # API service layer
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # App entry point
│   │   └── index.css               # Global styles
│   └── package.json
└── README.md
```

## API Endpoints

### GET `/health`
Health check endpoint for the API.

### POST `/api/labels/rates`
Get available shipping rates for a shipment.

**Request Body:**
```json
{
  "toAddress": {
    "name": "John Doe",
    "street1": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "US",
    "phone": "+1234567890",
    "email": "john@example.com"
  },
  "fromAddress": {
    "name": "Jane Smith",
    "street1": "456 Oak Ave",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001",
    "country": "US",
    "phone": "+1234567890",
    "email": "jane@example.com"
  },
  "parcels": [{
    "length": "5",
    "width": "4",
    "height": "3",
    "weight": "16",
    "weight_unit": "oz",
    "mass_unit": "oz"
  }]
}
```

### POST `/api/labels`
Create a shipping label.

**Request Body:**
```json
{
  // Same as rates endpoint, plus:
  "serviceLevelToken": "rate_id_from_rates_response",
  "carrierAccount": "carrier_account_id"
}
```

## Development

### Backend Commands
- `npm start` - Start the production server
- `npm run dev` - Start with nodemon (auto-reload)
- `npm test` - Run tests (to be implemented)

### Frontend Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

### Backend
- `PORT` - Server port (default: 5000)
- `SHIPPO_API_KEY` - Your Shippo API key (required)

### Frontend
- `VITE_API_BASE_URL` - Backend API URL (default: http://localhost:5000)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC

## Support

For issues and questions, please open an issue on the GitHub repository.
