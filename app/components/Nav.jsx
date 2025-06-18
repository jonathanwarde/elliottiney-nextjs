import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-center gap-4 h-7">
        <Link href="/about" className="uppercase text-[14px] border flex justify-center items-center px-[14px] py-0 rounded-[16px]">About</Link>
        <Link href="/projects" className="uppercase text-[14px] border flex justify-center items-center px-[14px] py-0 rounded-[16px]">Projects</Link>
        <Link href="/testimonials" className="uppercase text-[14px] border flex justify-center items-center px-[14px] py-0 rounded-[16px]">Testimonials</Link>
        <Link href="/contact" className="uppercase text-[14px] border flex justify-center items-center px-[14px] py-0 rounded-[16px]">Contact</Link>
    </nav>
  );
}