import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Box className='text-center'>
      <Image src='/logo.jpeg' alt='logo' width={70} height={70} />
      <Text color='gray.600'>FoodApp</Text>
    </Box>

  )
}

export default Logo
