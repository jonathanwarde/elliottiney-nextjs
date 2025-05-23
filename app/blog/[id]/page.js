// app/blog/[id]/page.js
import Link from 'next/link'

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/posts`,
    { next: { revalidate: 60 } }
  )
  const posts = await res.json()

  return posts.map(post => ({
    id: post.id.toString(),
  }))
}

export default async function PostPage({ params }) {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/posts/${params.id}`,
    { next: { revalidate: 60 } }
  )
  const post = await res.json()

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <Link href="/blog">← Back to Blog</Link>
    </article>
  )
}
