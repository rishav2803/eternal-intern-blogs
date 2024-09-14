import Link from 'next/link';
import DateComponent from '../ui/DateComponent';
import ContentfulImage from '../ui/ContentfulImage';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

const PostCard = ({ post }) => {
  const { title, slug, excerpt, coverImage, date } = post.fields;
  console.log(coverImage);
  const truncatedExcerpt = truncateText(excerpt, 100);

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title} >
        <div className="mb-2">
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={300}
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl mb-1  leading-snug">{title}</h3>
        <div className="text-sm mb-4 text-gray-400">
          <DateComponent dateString={date} />
        </div>
        <p className="text-base mb-4">
          {truncatedExcerpt}
        </p>
        <Link href={`/posts/${slug}`} className="text-blue-600 hover:underline">
          Read more
        </Link>
      </div>
    </li>
  );
};

export default PostCard;

