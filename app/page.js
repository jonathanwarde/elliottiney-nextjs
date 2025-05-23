import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Next.js in a Subdir</h1>
      <nav>
        <Link href="/about">About</Link> |{' '}
        <Link href="/blog">Blog</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}