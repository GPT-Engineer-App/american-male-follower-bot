import { Box, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4}>
      <HStack spacing={8} justify="center">
        <Link as={NavLink} to="/" exact activeClassName="active" _hover={{ textDecoration: "none" }} color="white">
          Home
        </Link>
        <Link as={NavLink} to="/about" activeClassName="active" _hover={{ textDecoration: "none" }} color="white">
          About
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
