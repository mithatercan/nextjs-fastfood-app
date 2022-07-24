import AuthContainer from '@components/auth/Container'
import Form from '@components/auth/Form'
import { useSignupMutation } from '@services/api'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

type Data = {
  email: string
  password: string
  checkbox: boolean
}

const Signup: NextPage = () => {
  const [signup, result] = useSignupMutation()
  const router = useRouter()

  const handleSubmit = (data: Data) => {
    signup({
      ...data,
    })

    if (result.isSuccess) {
      router.push('/')
    }
  }

  return (
    <AuthContainer type="signup">
      <Form
        type="signup"
        isLoading={result.isLoading}
        onSubmit={handleSubmit}
      />
    </AuthContainer>
  )
}

export default Signup
