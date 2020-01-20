const express = require('express');
const router = express.Router();

//get method with express
router.get('/', (req, res) => {
  res.status(200).json({ success: true, meg: 'Show all bootcamps' });
});
//get one id for update and delete
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, meg: `Show one bootcamp ${req.params.id}` });
});
//post
router.post('/', (req, res) => {
  res.status(200).json({ success: true, meg: 'Create new bootcamp' });
});
//put
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, meg: `Update bootcamp ${req.params.id}` });
});
//delete
router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, meg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;