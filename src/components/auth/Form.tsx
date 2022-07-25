import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { Lock, Mail } from 'tabler-icons-react'

type Inputs = {
  email: string
  password: string
  checkbox: boolean
}

const Container = ({
  type,
  onSubmit,
  isLoading,
}: {
  type: 'signin' | 'signup'
  onSubmit: SubmitHandler<Inputs>
  isLoading: boolean
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { t } = useTranslation('auth')

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={6}>
        <Stack spacing={3}>
          <InputGroup>
            <InputLeftElement>
              <Mail size={20} color="gray" />
            </InputLeftElement>
            <Input
              placeholder={t('auth:email')}
              type="email"
              {...register('email', { required: true })}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <Lock size={20} color="gray" />
            </InputLeftElement>
            <Input
              placeholder={t('auth:password')}
              type="password"
              {...register('password', { required: true })}
            />
          </InputGroup>
          <Checkbox {...register('checkbox')}>
            <Text color="gray.500">{t('auth:remember_me')}</Text>
          </Checkbox>
        </Stack>
        <Button
          width="100%"
          colorScheme="blue"
          type="submit"
          isLoading={isLoading}
        >
          {type === 'signin' ? t('auth:signin') : t('auth:signup')}
        </Button>
      </Stack>
    </form>
  )
}

export default Container
