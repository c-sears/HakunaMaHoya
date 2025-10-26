# Setup Guide - Hakuna MaHoya Product Label App

## Quick Start Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with:
```
PORT=5000
SHIPPO_API_KEY=your_shippo_api_key_here
```

Run the backend:
```bash
npm run dev
```

### 2. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Optional: Create a `.env` file in the `frontend/` directory:
```
VITE_API_BASE_URL=http://localhost:5000
```

Run the frontend:
```bash
npm run dev
```

### 3. Access the App

Open your browser to: http://localhost:3000

## Getting Your Shippo API Key

1. Go to [Shippo API Login](https://app.goshippo.com/api/auth/login/)
2. Sign up or log in
3. Navigate to API settings
4. Copy your API key
5. Add it to `backend/.env` file

## Troubleshooting

### Backend won't start
- Check that port 5000 is not already in use
- Verify your `.env` file exists in the backend directory
- Ensure all dependencies are installed: `npm install`

### Frontend won't start
- Check that port 3000 is not already in use
- Verify all dependencies are installed: `npm install`
- Check that the backend is running on port 5000

### API calls fail
- Ensure the backend server is running
- Check that your Shippo API key is valid
- Verify the `.env` file has the correct API key
- Check browser console for CORS errors

## Development Tips

1. **Both servers must run simultaneously** - Backend on port 5000, Frontend on port 3000
2. **Hot Reload** - Both servers support hot reload during development
3. **API Testing** - You can test the backend API at http://localhost:5000/health
4. **Backend logs** - Check the backend terminal for API call logs and errors

## Next Steps

- [ ] Add authentication/authorization
- [ ] Implement error handling for address validation
- [ ] Add carrier account selection
- [ ] Create tests
- [ ] Add support for multiple parcels
- [ ] Implement label history/management

