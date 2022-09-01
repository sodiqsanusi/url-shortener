import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main>
        URL Shortener
      </main>
    </>
  )
}
