import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const Container = ({ type }) => {
  return (
    <Link className='cursor-pointer' href={type === 'signin' ? '/auth/signup' : '/auth/signin'}>
      <Text className='text-center' color='gray.500'>
        {type === 'signin' ? "Don't have an account?" : "Already have an account?"}
        <Text as='span' color='blue.500'>
          {type === 'signin' ? ' Sign up' : ' Sign in'}</Text>
      </Text>
    </Link>
  )
}

export default Container
