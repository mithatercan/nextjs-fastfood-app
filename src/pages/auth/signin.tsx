import AuthContainer from '@components/auth/Container'
import Form from '@components/auth/Form'
import { useLoginMutation } from '@services/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

type Data = {
  email: string
  password: string
  checkbox: boolean
}

const Signin: NextPage = () => {
  const [login, result] = useLoginMutation()
  const router = useRouter()

  const handleSubmit = (data: Data) => {
    login({
      ...data,
    })

    if (result.isSuccess) {
      router.push('/')
    }
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
