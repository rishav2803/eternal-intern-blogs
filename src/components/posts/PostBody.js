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
    <div className={` ${geistMono.variable} prose prose-sm !max-w-none`}>
      <RichText content={content} />
    </div>
  )
}

export default PostBody
