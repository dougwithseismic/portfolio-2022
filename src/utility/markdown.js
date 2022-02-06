import ReactMarkdown from 'react-markdown'

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      components={{ p: Paragraph, h2: H2, ul: UL, ol: OL, li: LI }}
    >
      {children}
    </ReactMarkdown>
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
    <h2 className="text-2xl font-serif font-normal md:mb-8 break-words">
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
