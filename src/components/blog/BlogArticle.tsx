import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BlogArticle() {
  const params = useParams();
  console.log(params);
  const title = params.blogTitle;
  const file_name = title + ".md";
  const [post, setPost] = useState('');
  useEffect(() => {
    import(`../../../public/blog/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  })

  return (
    <div className='hero-b min-h-[72vh] p-10 h-fit prose lg:prose-lg flex justify-center min-w-[100%]' >
      <div className="w-[65vw] flex h-fit border rounded-xl shadow-xl p-[5rem] bg-indigo-900 text-white  ">
        <Markdown>
          {post}
        </Markdown>
      </div>
    </div>
  )
}

