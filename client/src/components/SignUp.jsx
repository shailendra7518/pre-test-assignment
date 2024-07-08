import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const handleSignup = async () => {
    setStatus("loading");
    setError(null);

    try {
      const response = await axios.post(`${baseURL}/auth/signup`, {
        email,
        password,
      });
      setStatus("succeeded");
      navigate("/signin");
    } catch (error) {
      setError(error.message || "Failed to signup");
      setStatus("failed");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Stack spacing={4}>
        <Heading>Create an Account</Heading>
        {status === "failed" && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Flex gap={3}>
          <Button
            colorScheme="teal"
            onClick={handleSignup}
            isLoading={status === "loading"}
          >
            Sign Up
          </Button>

          <Link to={"/signin"}>
            <Button>Sign In</Button>
          </Link>
        </Flex>

        {status === "succeeded" && (
          <Text>
            Signup successful! Please check your email for verification.
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default Signup;
