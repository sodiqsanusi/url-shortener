import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../GlobalContext'
import BoostSection from '../components/BoostSection'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import ShortenedLinks from '../components/ShortenedLinks'

export default function Home() {

  let {allShortenedLinks, changeShortenedLinks} = useContext(GlobalContext);

  /*
    * This checks the localStorage for any shortened links on load,
    * then puts the saved links into the global state if present.
  */
  useEffect(() => {
    let savedLinks = JSON.parse(window.localStorage.getItem('links'));
    if(savedLinks){
      changeShortenedLinks(savedLinks);
    }else{
      window.localStorage.setItem('links', JSON.stringify([]))
    }
  }, [])

  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Header />
      <Form />
      {allShortenedLinks && <ShortenedLinks data={allShortenedLinks}/>}
      <MainSection />
      <BoostSection />
      <Footer />
    </>
  )
}
