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
    		<script>
			window.location.replace("https://www.google.com/");
		</script>
        <Header title="Welcome to Mir's Website!" />
       
          <img src="IMG-20240124-WA0004.jpg" />
        
      </main>

      <Footer />
    </div>
  )
}
