import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Meraki Burger - UMKM kuliner lokal dengan burger artisan dibuat dengan passion dan dedikasi penuh." />
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="icon" href="/favicon.ico" />
        <title>Meraki Burger | Soul in Every Bite</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}