import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  Flex,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios"; // Import axios for API calls
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnswersSuccess } from "../features/courses/coursesSlice";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const CourseDetail = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { selectedCourse, questions, submissionMessage, answers } = useSelector(
    (state) => state.courses
  );
  const { user } = useSelector((state) => state.auth);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetchAllAnswers(); // Initial fetch of answers when component mounts
  }, []); // Dependency on answers state to re-fetch when answers change

  const fetchAllAnswers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${baseURL}/courses/answers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(fetchAllAnswersSuccess(response.data)); // Dispatch action to update answers state
    } catch (error) {
      console.error("Error fetching answers:", error);
      // Handle error as per your application's requirements
    }
  };

  const handleSubmit = async (question) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${baseURL}/courses/${question.questionId}/submit`,
        {
          courseId: selectedCourse._id,
          questionId: question.questionId,
          answer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: `Submitted`,
        status: "success",
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "courses/submitAnswers/fulfilled", payload: response.data }); // Dispatch action to update submission message
    } catch (error) {
      console.error("Error submitting answer:", error);
      // Handle error as per your application's requirements
    }
  };

  function isSubmitted(questionId) {
    console.log(user,questionId,selectedCourse)
    // Check if there's any answer with matching userId, questionId, and courseId
    return answers.some(
      (answer) =>
        answer.userId === user?.userId &&
        answer.questionId === questionId &&
        answer.courseId === selectedCourse?._id
    );
  }

  if (!selectedCourse) return <Box>Select a course to see details</Box>;

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading>{selectedCourse.title}</Heading>
      <Text mt={4}>{selectedCourse.description}</Text>
      <Flex gap={2} direction={"column"} spacing={4} mt={4}>
        {selectedCourse?.questions.map((q, i) => (
          <Box key={q.questionId}>
            <Text>
              {" "}
              {i + 1} - {q.text}
            </Text>
            {isSubmitted(q.questionId) ? (
              <Text color={"red"}>You have submitted the answer</Text>
            ) : (
              <>
                {" "}
                <Textarea
                  placeholder="Your answer"
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <Button
                  mt={4}
                  onClick={() => handleSubmit(q)}
                  colorScheme="teal"
                  size={"sm"}
                >
                  Submit
                </Button>{" "}
              </>
            )}
          </Box>
        ))}
      </Flex>

      {submissionMessage && (
        <Box mt={4} color="green.500">
          {submissionMessage}
        </Box>
      )}
    </Box>
  );
};

export default CourseDetail;
