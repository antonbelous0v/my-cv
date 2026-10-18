import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }: { node?: any; [key: string]: any }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
        h2: ({ node, ...props }: { node?: any; [key: string]: any }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
        h3: ({ node, ...props }: { node?: any; [key: string]: any }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
        p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 leading-relaxed" {...props} />,
        ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-8 mb-4 space-y-2" {...props} />,
        ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-8 mb-4 space-y-2" {...props} />,
        li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
        a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-blue-600 hover:underline" {...props} />,
        blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
        ),
        table: ({ node, children, ...props }: { node?: any; [key: string]: any }) => (
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm" {...props}>
              {children}
            </table>
          </div>
        ),
        thead: ({ node, ...props }: { node?: any; [key: string]: any }) => (
          <thead className="border-b border-gray-300 dark:border-gray-700" {...props} />
        ),
        th: ({ node, ...props }: { node?: any; [key: string]: any }) => (
          <th className="px-3 py-2 text-left align-bottom font-semibold" {...props} />
        ),
        td: ({ node, ...props }: { node?: any; [key: string]: any }) => (
          <td className="px-3 py-2 align-top border-b border-gray-200 dark:border-gray-800" {...props} />
        ),
        pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
          <pre
            className="my-4 overflow-x-auto rounded-md bg-gray-950 p-4 text-sm text-gray-100"
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }: { node?: any; inline?: boolean; className?: string; children?: React.ReactNode; [key: string]: any }) => {
          return !inline ? (
            <code className={className} {...props}>
              {String(children).replace(/\n$/, "")}
            </code>
          ) : (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600 font-mono text-sm" {...props}>
              {children}
            </code>
          )
        },
        img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
          <img className="max-w-full h-auto rounded-md my-6" {...props} alt={props.alt || ""} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
