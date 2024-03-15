const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/api/v1/notes', userController.getAllNotes);
router.post('/api/v1/notes', userController.createNote);
router.get('/api/v1/notes/id/:id', userController.getNoteById);
router.get('/api/v1/notes/name/:name', userController.getNoteByName);


module.exports = router;