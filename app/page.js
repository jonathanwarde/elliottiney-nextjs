import Nav from './components/Nav'
import Logo from './components/Logo'
import PortfolioGrid from './components/PortfolioGrid'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <>
    <Script
      src="./js/videos.js"
      strategy="afterInteractive"
    />
    <div className="flex flex-col h-screen p-4">
      <header className="p-4 flex justify-between fixed top-0 left-0 right-0">
        {/*<p className="text-3xl">Elliot<span className="font-heading">Tiney</span></p>*/}
        <Logo />
        <Nav />
      </header>
      <main className="flex flex-col flex-1">
        <div className="flex flex-1 items-center justify-center">
          <Image
          src="/elliottiney.jpg"
          alt="elliot tiney"
          width={200}
          height={200} 
          className="rounded-full mr-8" 
          />
          <h2 className="text-[2rem] max-w-[25rem] leading-[1.2] uppercase">Award winning Senior Copywriter / Creative Director</h2> 
        </div>
        <div className="grid grid-cols-3 gap-4 border-t-2 pt-5">
          <h3 className="uppercase">Senior Creative</h3>
          <p className="text-center text-sm">I’m an award winning Senior Copywriter / Creative Director with experience in full time roles at VML, BBH, RCKR/Y&R, Dentsu, Wieden+Kennedy, and Mr President, and a background as a LAMDA trained actor and a Perrier nominated comedian.</p>
          <h3 className="flex justify-end uppercase">Creative Director</h3>
        </div>
      </main>
    </div>
    <PortfolioGrid />
    </>
  );
}