import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box className="w-full text-center absolute bottom-3 left-0">
      <Text color="gray.600" fontSize="13">
        @Copyright FoodApp 2022
      </Text>
    </Box>
  );
};

export default Footer;
