import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      components={{ p: Paragraph, h2: H2, ul: UL, ol: OL, li: LI, code: Code }}
    >
      {children}
    </ReactMarkdown>
  )
}

const Code = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  const childrenText = String(children).replace(/\n$/, '')

  return !inline && match ? (
    <SyntaxHighlighter
      style={atomDark}
      language={'javascript'}
      PreTag="div"
      wrapLines={true}
      wrapLongLines={true}
      {...props}
    >
      {childrenText}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-cardGrey text-white p-2" {...props}>
      {children}
    </code>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p className="text-lg text-faintGrey md:mb-16 leading-[190%] break-words">
      {children}
    </p>
  )
}

const H2 = ({ children }) => {
  return (
    <h2 className="text-3xl font-serif font-normal md:m-0 break-words">
      {children}
    </h2>
  )
}

const UL = ({ children }) => {
  return <ul className="list-disc pl-8 mb-16 break-words">{children}</ul>
}
const OL = ({ children }) => {
  return <ul className="list-decimal pl-4 break-words">{children}</ul>
}

const LI = ({ children }) => {
  return <li className="list-item text-lg mb-4">{children}</li>
}
