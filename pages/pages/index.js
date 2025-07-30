import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>XTC Memecoin</title>
        <meta name="description" content="Welcome to XTC Memecoin website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4">Welkom bij de XTC Memecoin!</h1>
        <p className="text-lg text-center max-w-xl">
          Dit is de officiële website van de XTC Memecoin. Blijf op de hoogte van updates en meer.
        </p>
      </main>
    </>
  )
}
