import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Mir's Website!" />
        <p className="description">
          <img src="IMG-20240124-WA004.jpg">
        </p>
      </main>

      <Footer />
    </div>
  )
}
