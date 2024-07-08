import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  VStack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      });
    
      
      dispatch(loginSuccess(response?.data))
      navigate("/dashboard");
      toast({
        title: "Login successful",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Failed to login",
        description: error.message || "An error occurred",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box p={8} maxW="md" borderWidth={1} borderRadius="lg" overflow="hidden">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading>Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Flex gap={3}>
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
          <Link to={"/signup"}>
            <Button>SignUp</Button>
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LoginPage;
