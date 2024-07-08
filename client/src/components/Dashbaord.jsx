import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';

const Dashboard = () => {
  

  return (
    <Box p={8}>
      <CourseList/>
    </Box>
  );
};

export default Dashboard;
