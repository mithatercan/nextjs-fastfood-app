import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Container = ({ type }: { type: 'signin' | 'signup' }) => {
  const { t } = useTranslation('auth')

  return (
    <Link
      className="cursor-pointer"
      href={type === 'signin' ? '/auth/signup' : '/auth/signin'}
    >
      <Text className="text-center" color="gray.500">
        {type === 'signin'
          ? t('auth:donot_have_account')
          : t('auth:have_account')}
        <Text ml={1} as="span" color="blue.500">
          {type === 'signin' ? t('auth:signup') : t('auth:signin')}
        </Text>
      </Text>
    </Link>
  )
}

export default Container
