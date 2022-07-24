import { NextPage } from 'next'
import AuthContainer from '@components/auth/Container'

const signin: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return <AuthContainer type="signin" handleSubmit={handleSubmit} />
}

export default signin
