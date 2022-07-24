import { Box, Flex } from '@chakra-ui/react'
import Logo from './Logo';
import Form from './Form'
import Links from './Links'
import Footer from './Footer';
import React, { FC } from 'react'

const Container: FC<{
  type: 'signin' | 'signup'
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}> = ({
  type,
  handleSubmit,
}) => {
    return (
      <Box className="w-screen h-screen flex bg-cover bg-center bg-auth-bg" >
        <Flex className='relative w-screen sm:w-96 gap-5 flex-col justify-center items-center bg-white px-5 shadow-lg'>
          <Logo />
          <Form type={type} handleSubmit={handleSubmit} />
          <Links type={type} />
          <Footer />
        </Flex>
      </Box>
    )
  }

export default Container
