import React from "react";
import { ChakraProvider, Box, Heading, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashbaord";
import CourseDetail from "./components/CourseDetail";
import Navbar from "./components/Navbar";
import Signup from "./components/SignUp";
import PrivateRoute from "./routes/privateRoute";
const App = () => {
  const  {token}  = useSelector((state) => state.auth);


  return (
    <ChakraProvider>
      <Navbar />
      <Flex
        direction={"column"}
        fontSize="xl"
        justifyContent={"center"}
        p={5}
        alignItems={"center"}
        w={"100%"}
      >
        {/* <Heading p={5}>Educational Dashboard</Heading> */}
        <Routes>
          <Route path="/login" element={ !token ?<LoginPage />:<Navigate to={"/dashboard"} />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/course/:courseId"
            element={
              <PrivateRoute>
                <CourseDetail />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={ !token?  <Signup />:<Navigate to={"/dashboard"} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
