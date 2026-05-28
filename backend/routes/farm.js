const express = require('express');
const router = express.Router();
const Farm = require('../models/Farm');

// Create new farm
router.post('/farms', async (req, res) => {
  try {
    // Log the received data for debugging
    console.log('Received farm data:', req.body);
    
    const farm = new Farm(req.body);
    await farm.save();
    res.status(201).json({ message: 'Farm created successfully', farm });
  } catch (error) {
    // Send more detailed error information
    console.error('Farm creation error:', error);
    res.status(400).json({ 
      message: 'Failed to create farm', 
      error: error.message,
      details: error.errors 
    });
  }
});

// Get all farms
router.get('/farms', async (req, res) => {
  try {
    const farms = await Farm.find();
    res.json(farms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get farm by ID
router.get('/farms/:id', async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }
    res.json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//for delete
router.delete('/farms/:id', async (req, res) => {
  try {
    const deleted = await Farm.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Farm not found' });
    res.json({ message: 'Farm deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;