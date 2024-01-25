import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const MarkdownIdentifier = ({texts}) => {

  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      className="markdownList flex flex-col gap-2 whitespace-pre-wrap"
    >
      {texts}
    </Markdown>
  )
}

export default MarkdownIdentifier;