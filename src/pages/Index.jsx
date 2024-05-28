import { Container, Text, VStack, IconButton, Input, Button, HStack, Box, Image } from "@chakra-ui/react";
import { FaSearch, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const handleSearch = () => {
    // Placeholder for search functionality
    setProfile({
      username: "john_doe",
      followers: 15000,
      image: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBwcm9maWxlfGVufDB8fHx8MTcxNjkyODM2MXww&ixlib=rb-4.0.3&q=80&w=1080",
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Instagram Profile Search</Text>
        <HStack>
          <Input placeholder="Enter Instagram username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        {profile && (
          <Box textAlign="center" mt={4}>
            <Image src={profile.image} alt="Profile" borderRadius="full" boxSize="150px" />
            <Text fontSize="xl" mt={2}>
              {profile.username}
            </Text>
            <Text>{profile.followers} followers</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
