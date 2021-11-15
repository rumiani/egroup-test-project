import Head from 'next/head'
import Cards from '../components/cards/cards'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Main from '../components/main/main'

export default function Home() {
  return (
    <div >
      <Head>
        <title>egroup</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>

      </Head>
      <header className='text-center'>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
