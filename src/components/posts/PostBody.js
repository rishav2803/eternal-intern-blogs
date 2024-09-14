import localFont from 'next/font/local';
import RichText from '../RichText'


const geistMono = localFont({
  src: "../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const PostBody = ({ post }) => {
  const { content, excerpt } = post.fields

  return (
    <div className={` ${geistMono.variable} prose max-w-none font-[family-name:var(--font-geist-mono)]`}>
      <RichText content={content} excerpt={excerpt} />
    </div>
  )
}

export default PostBody
