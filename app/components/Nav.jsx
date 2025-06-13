import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
        <Link href="/about">About</Link> |{' '}
        <Link href="/projects">Projects</Link> |{' '}
        <Link href="/testimonials">Testimonials</Link> |{' '}
        <Link href="/contact">Contact</Link>
    </nav>
  );
}