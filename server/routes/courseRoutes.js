// routes/courseRoutes.js
const express = require('express');
const { getCourses, submitAnswer, getAllAnswers } = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getCourses);
router.get('/answers',getAllAnswers );
router.post('/:question/submit',auth, submitAnswer);

module.exports = router;
