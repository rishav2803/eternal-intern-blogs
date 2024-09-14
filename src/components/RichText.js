import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import ContentfulImage from './ui/ContentfulImage';

const options = {
  renderMark: {
    [MARKS.CODE]: text => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find(item =>
          item.marks?.find(mark => mark.type === 'code')
        )
      ) {
        return (
          <div>
            {children}
          </div>
        )
      }

      return <p>{children}</p>
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1 style={{ fontFamily: "inherit" }}>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 style={{ marginBottom: "1.5rem" }}>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul style={{ margin: "0" }}>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [INLINES.ENTRY_HYPERLINK]: node => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },
    [INLINES.HYPERLINK]: node => {
      const text = node.content.find(item => item.nodeType === 'text')?.value;
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className='container'
        />
      );
    },
  },
};

const RichText = ({ content }) => {
  console.log(content);
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;

