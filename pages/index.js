import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Header />
      <main>
        URL Shortener
      </main>
    </>
  )
}
