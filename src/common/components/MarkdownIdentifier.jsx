import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const MarkdownIdentifier = ({texts}) => {

  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      className="markdownList"
    >
      {texts}
    </Markdown>
  )
}

export default MarkdownIdentifier;