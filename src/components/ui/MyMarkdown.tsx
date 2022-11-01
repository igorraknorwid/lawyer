import ReactMarkdown from "react-markdown";


interface IMyMarkdown {
  content: string;
}

export default function MyMarkdown({ content}: IMyMarkdown) {
  return (   
      <div className='markdown'>
        <ReactMarkdown children={content} />
      </div>
 
  );
}