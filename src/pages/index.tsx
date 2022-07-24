import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div classM>
      <div>
        <h1 className="home-heading">Hey there</h1>
        <p className="home-text">This is a simple Next.js project.</p>
      </div>

      <div>
        <code className="home-code">This is a code</code>
      </div>
    </div>
  )
}

export default Home
