import { Container, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="2xl">About Us</Text>
      <Text mt={4}>This is a simple Instagram profile search application.</Text>
    </Container>
  );
};

export default About;
