import App from '../components/App.jsx'
import Head from 'next/head'

export default function Home() {

  return (
    <div id='body'>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5037ac" />
        <meta name="Mandelbrot.network" content="Website oficial Mandelbrot.network"/>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        <link rel="manifest" href="/manifest.json" />
        <title>Mandelbrot.network</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <App/>
    </div>
  )
}
