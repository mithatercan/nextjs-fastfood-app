import { Button, Checkbox, Input, Stack, Text } from '@chakra-ui/react'
import AuthContainer from '@components/auth/Container'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { useCreateCompanyMutation, useUseUserQuery } from '../../services/api'

type TCompany = {
  name: string
  region: string
  currency: string
  terms: boolean
}

const UserPage = () => {
  const [createCompany] = useCreateCompanyMutation()
  const { data: user } = useUseUserQuery()
  const router = useRouter()
<<<<<<< HEAD
=======
  if (user?.company) {
    router.push('/menu')
  }
>>>>>>> 5c9eb109004783eed16e4abeaca20c489afd38c6
  const { register, handleSubmit } = useForm<TCompany>()

  const onSubmit = (data: TCompany) => {
    if (data.terms) {
      createCompany({ ...data })
    } else {
      alert('You must accept the terms and conditions')
    }
  }

<<<<<<< HEAD
  if (user && user.company) {
    router.push('/app/menu')
  }

  return !user ? (
    'Loading...'
  ) : (
=======
  return (
>>>>>>> 5c9eb109004783eed16e4abeaca20c489afd38c6
    <AuthContainer type="company">
      <form className="w-[90%]" onSubmit={handleSubmit(onSubmit)}>
        <Stack className="mt-5" spacing={7}>
          <Stack spacing={4}>
            <Input
              size="lg"
              placeholder="Company's name"
              type="text"
              {...register('name')}
            />
            <Input
              size="lg"
              placeholder="Company's region"
              type="text"
              {...register('region')}
            />
            <Input
              size="lg"
              placeholder="Currency"
              type="text"
              {...register('currency')}
            />
            <Checkbox size="lg" {...register('terms')}>
              <Text className="text-zinc-500">
                I agree to the terms and conditions
              </Text>
            </Checkbox>
          </Stack>
          <Button size="lg" type="submit" colorScheme="blue">
            Create
          </Button>
        </Stack>
      </form>
    </AuthContainer>
  )
}

export default UserPage
