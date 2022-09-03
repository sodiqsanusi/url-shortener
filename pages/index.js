import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import BoostSection from '../components/BoostSection'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
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
      <Form />
      <MainSection />
      <BoostSection />
      <Footer />
    </>
  )
}
