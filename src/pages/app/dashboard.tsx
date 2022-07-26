import { Box, Flex } from '@chakra-ui/react'
import Main from '@components/dashboard/Main'
import Navbar from '@components/dashboard/Navbar'
import Sidebar from '@components/dashboard/Sidebar'
import type { NextPage } from 'next'

const Dashboard: NextPage = () => {
  return (
    <Flex>
      <Sidebar />
      <Box className="flex-1">
        <Navbar />
        <Main />
      </Box>
    </Flex>
  )
}

export default Dashboard
