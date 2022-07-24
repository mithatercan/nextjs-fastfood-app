import { NextPage } from 'next'
import AuthContainer from '@components/auth/Container'

const signup: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return <AuthContainer type="signup" handleSubmit={handleSubmit} />
}

export default signup
