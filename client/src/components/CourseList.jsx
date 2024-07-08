import React, { useEffect, useState } from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import axios from "axios"; // Import axios for API calls
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoursesSuccess,
  selectCourse,
} from "../features/courses/coursesSlice";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const CourseList = () => {
  // const [courses, setCourses] = useState([]); // State to store courses
  const [loading, setLoading] = useState(true); // Loading state
  const dispatch = useDispatch();
  const {courses}=useSelector((state)=>state.courses)
  console.log(courses)

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${baseURL}/courses`);
      // console.log(response.data);
      dispatch(fetchCoursesSuccess(response.data));
      // setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  const handleSelectCourse = (courseId) => {
    const selectedCourse = courses.find((course)=>course._id===courseId)
    dispatch(selectCourse(selectedCourse));
  };

  return (
    <VStack spacing={4}>
      <Heading>Courses</Heading>
      {loading ? (
        <Text>Loading...</Text> // Render a loading indicator while fetching data
      ) : (
        courses.map((course) => (
          <Link key={course._id} to={`/course/${course._id}`}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              onClick={() => handleSelectCourse(course._id)}
            >
              <Heading fontSize="xl">{course.title}</Heading>
              <Text mt={4}>{course.description}</Text>
            </Box>
          </Link>
        ))
      )}
    </VStack>
  );
};

export default CourseList;
