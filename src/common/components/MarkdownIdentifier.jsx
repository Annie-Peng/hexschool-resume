import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

// 套件 react-markdown, https://github.com/remarkjs/react-markdown
// 轉換 markdown -> HTML 顯示
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