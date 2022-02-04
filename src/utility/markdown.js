import ReactMarkdown  from 'react-markdown'

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown components={{ p: Paragraph, h2: H2, ul: UL, ol: OL }}>
        {children}
    </ReactMarkdown>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p className="text-lg text-faintGrey leading-[190%] mb-16">{children}</p>
  )
}

const H2 = ({ children }) => {
  return <h2 className="text-2xl font-serif font-normal mb-16">{children}</h2>
}

const UL = ({ children }) => {
  return <ul className="list-disc pl-8">{children}</ul>
}
const OL = ({ children }) => {
  return <ul className="list-decimal pl-4">{children}</ul>
}
