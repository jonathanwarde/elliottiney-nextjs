// app/blog/page.js
import Link from 'next/link'

export default async function BlogIndex() {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/posts`,
    { next: { revalidate: 60 } } // optional: revalidate every minute
  )
  const posts = await res.json()

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">← Home</Link>
    </main>
  )
}
