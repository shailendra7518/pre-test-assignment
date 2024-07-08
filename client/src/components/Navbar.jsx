import React from 'react';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
 
    navigate("/login")
  };

  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" align="center">
      <Box>
        <Heading size="md">
          <Link to="/">Edu Dashboard</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        {!token ? (
          <Button as={Link} to="/login"  variant="solid" mr={4}>
            Login
          </Button>
        ) : (
          <>
            <Button as={Link} to="/dashboard"   mr={4}>
              Dashboard
            </Button>
            <Button onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
