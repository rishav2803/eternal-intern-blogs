import Image from "next/image";
import localFont from "next/font/local";
import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Posts = ({ posts }) => {
  return (
    <section className={`section ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-mono)]`}>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-10'>
          {posts.map((post, i) => (
            <>
              <PostCard key={post.fields.slug} post={post} />
              <PostCard key={post.fields.slug} post={post} />
              <PostCard key={post.fields.slug} post={post} />
            </>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
