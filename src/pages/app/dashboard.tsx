import { Box, Button, Flex } from '@chakra-ui/react'
import BillDrawer from '@components/dashboard/BillDrawer'
import Main from '@components/dashboard/Main'
import Navbar from '@components/dashboard/Navbar'
import Sidebar from '@components/dashboard/Sidebar'
import type { NextPage } from 'next'
import { useState } from 'react'

const Dashboard: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Flex>
      <Sidebar />
      <Box className="flex-1">
        <Navbar />
        <Main />
        <Button onClick={toggleOpen}>Cashbox</Button>
        <BillDrawer isOpen={isOpen} toggleOpen={toggleOpen} />
      </Box>
    </Flex>
  )
}

export default Dashboard
