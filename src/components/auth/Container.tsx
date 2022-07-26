import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import Links from './Links'
import Logo from './Logo'

const Container = ({
  type,
  children,
}: {
  type: 'signin' | 'signup' | 'company'
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <Box className="w-screen h-screen flex bg-cover bg-center bg-auth-bg">
      <Flex className="relative w-screen sm:w-96 gap-5 flex-col justify-center items-center bg-white px-5 shadow-lg">
        <Logo />
        {children}
        {type === ('signin' || 'signup') && <Links type={type} />}
        <Footer />
      </Flex>
    </Box>
  )
}

export default Container
