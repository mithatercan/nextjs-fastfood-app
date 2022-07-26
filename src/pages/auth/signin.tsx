import AuthContainer from '@components/auth/Container'
import Form from '@components/auth/Form'
import { useLoginMutation, useUseUserQuery } from '@services/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

type Data = {
  email: string
  password: string
  checkbox: boolean
}

const Signin: NextPage = () => {
  const router = useRouter()

  const { data: user } = useUseUserQuery()
  if (user?.id) {
    router.push('/auth/company')
  }
  const [login, result] = useLoginMutation()
  const handleSubmit = (data: Data) => {
    login({
      ...data,
    })
  }

  return (
    <AuthContainer type="signin">
      <Form
        type="signin"
        isLoading={result.isLoading}
        onSubmit={handleSubmit}
      />
    </AuthContainer>
  )
}

export default Signin
