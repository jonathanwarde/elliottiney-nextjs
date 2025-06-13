import Nav from './components/Nav'

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-4">
      <header className="flex justify-between border-2">
        <span>Elliot Tiney</span>
        <Nav />
      </header>
      <main className="flex flex-col flex-1">
        <h1 className="flex flex-1 items-center justify-center">I make comedy things</h1>
        <div className="flex justify-between">
          <p>Senior Creative</p>
          <p>some blurb in the middle</p>
          <p>Creative Director</p>
        </div>
      </main>
    </div>
  );
}