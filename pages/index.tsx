import { FC } from 'react'
import Head from 'next/head'

import MainCard from '../components/MainCard'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Naufal Akbar Nugroho</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content="Hai! Saya Naufal Akbar Nugroho, dan ini adalah Halaman Web Profil Saya!" />
        <meta property="og:url" content="https://profile.naufalakbar.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Naufal Akbar Nugroho" />
        <meta property="og:description" content="Hai! Saya Naufal Akbar Nugroho, dan ini adalah Halaman Web Profil Saya!" />
        <meta property="og:title" content="Naufal Akbar Nugroho" />
        {/* <meta property="og:image" content="https://profile.naufalakbar.me/" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://twitter.com/nuflakbrr" />
        <meta name="twitter:title" content="Naufal Akbar Nugroho" />
        <meta name="twitter:description" content="Hai! Saya Naufal Akbar Nugroho, dan ini adalah Halaman Web Profil Saya!" />
        {/* <meta name="twitter:image" content="https://profile.naufalakbar.me/" /> */}
        <link rel="canonical" href="https://profile.naufalakbar.me/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainCard />
      </main>
    </>
  )
}

export default Home
