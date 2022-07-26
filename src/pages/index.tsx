import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <div>Home</div>
}

export default Home

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/auth/signin',
      permanent: false,
    },
  }
}
