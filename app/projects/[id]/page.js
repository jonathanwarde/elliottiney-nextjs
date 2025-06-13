// app/blog/[id]/page.js
import Link from 'next/link'

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/project`,
    { next: { revalidate: 60 } }
  )
  const posts = await res.json()

  return posts.map(post => ({
    id: post.id.toString(),
  }))
}

export default async function PostPage(props) {
  const { params } = await props;
  const id = params.id;
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/project/${params.id}`,
    { next: { revalidate: 60 } }
  )
  const post = await res.json()

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <Link href="/projects">← Back to projects</Link>
    </article>
  )
}
