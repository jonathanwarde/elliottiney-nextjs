import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>This content is static in our Next.js app.</p>
      <Link href="/app/">← Home</Link>
    </main>
  );
}
