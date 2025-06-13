// app/blog/page.js
import Link from 'next/link'

export default async function ProjectIndex() {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/project?per_page=100&orderby=title&order=asc`,
    { next: { revalidate: 60 } } // optional: revalidate every minute
  )
  const posts = await res.json()

  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/projects/${post.id}`}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">← Home</Link>
    </main>
  )
}
