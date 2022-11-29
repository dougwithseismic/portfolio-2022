import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import headingId from 'remark-heading-id'

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[headingId]}
      components={{ p: Paragraph, ul: UL, ol: OL, li: LI, code: Code }}
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
      wrapLongLines={true}
      {...props}
    >
      {childrenText}
    </SyntaxHighlighter>
  ) : (
    <code className="p-2 text-white bg-cardGrey" {...props}>
      {children}
    </code>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p className="text-lg text-[#9e9d9d] md:mb-8 leading-[190%] break-words">
      {children}
    </p>
  )
}

const H2 = ({ children }) => {
  return (
    <h2 className="font-serif text-3xl font-normal break-words md:m-0">
      {children}
    </h2>
  )
}

const UL = ({ children }) => {
  return <ul className="pl-8 mb-16 break-words list-disc">{children}</ul>
}
const OL = ({ children }) => {
  return <ul className="pl-4 break-words list-decimal">{children}</ul>
}

const LI = ({ children }) => {
  return <li className="mb-4 text-lg list-item">{children}</li>
}
