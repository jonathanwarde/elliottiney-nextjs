import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/your-id" method="POST">
        <label>Name: <input name="name" required /></label><br />
        <label>Email: <input name="_replyto" type="email" required /></label><br />
        <label>Message:<br />
          <textarea name="message" rows="5" required />
        </label><br/>
        <button type="submit">Send</button>
      </form>
      <Link href="/app/">← Home</Link>
    </main>
  );
}
