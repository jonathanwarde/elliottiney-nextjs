import Nav from './components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-4">
      <header className="flex justify-between border-2">
        <p className="text-3xl">Elliot<span className="font-heading">Tiney</span></p>
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
          Award winning Senior Copywriter / Creative Director 
        </div>
        <div className="grid grid-cols-3 gap-4">
          <p>Senior Creative</p>
          <p>I’m an award winning Senior Copywriter / Creative Director with experience in full time roles at VML, BBH, RCKR/Y&R, Dentsu, Wieden+Kennedy, and Mr President, and a background as a LAMDA trained actor and a Perrier nominated comedian.</p>
          <p className="flex justify-end">Creative Director</p>
        </div>
      </main>
    </div>
  );
}