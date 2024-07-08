const Course = require('../models/Course');
const Answer = require('../models/Answer');
const { mockQuestions } = require('../utils/mockData');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitAnswer = async (req, res) => {
  try {
    // console.log("reached",req)
    const { courseId, questionId, answer } = req.body;
     const userId = req.user.userId; // assuming req.user is set by the auth middleware
    const newAnswer = new Answer({
      userId,
      courseId,
      questionId,
      answer
    });

    await newAnswer.save();
    res.status(201).json({ message: 'Submission received', answer: newAnswer });
  } catch (err) {

    res.status(500).json(err);
  }
};


exports.getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find();
    res.json(answers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
