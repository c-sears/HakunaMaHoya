const express = require('express');
const router = express.Router();
// Load controller lazily to ensure env vars are loaded first
let labelController;

// POST /api/labels
router.post('/', (req, res) => {
  if (!labelController) labelController = require('../controllers/labelController');
  labelController.createLabel(req, res);
});

// POST /api/labels/rates
router.post('/rates', (req, res) => {
  if (!labelController) labelController = require('../controllers/labelController');
  labelController.getRates(req, res);
});

module.exports = router;

