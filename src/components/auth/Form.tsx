import { Button, Checkbox, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { Mail, Lock } from 'tabler-icons-react';


const Container = ({
  type,
  handleSubmit,
}: {
  type: 'signin' | 'signup'
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <Stack spacing={6}>
        <Stack spacing={3}>
          <InputGroup>
            <InputLeftElement>
              <Mail size={20} color='gray' />
            </InputLeftElement>
            <Input placeholder='Email' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <Lock size={20} color='gray' />
            </InputLeftElement>
            <Input placeholder='Password' type='password' />
          </InputGroup>
          <Checkbox >
            <Text color='gray.500'>Remember me</Text>
          </Checkbox>
        </Stack>
        <Button width='100%' colorScheme='blue'>{type === 'signin' ? 'Sign in' : 'Sign up'}</Button>

      </Stack>
    </form>
  )
}

export default Container
