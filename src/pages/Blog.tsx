import { useEffect, useState } from "react";
import "../components/landing/landing.css"
import Markdown from "markdown-to-jsx";

function Blog() {
  const file_name = "test.md";
  const [post, setPost] = useState('');
  useEffect(() => {
    import(`../../public/blog/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  })
  return (
    <div className="hero-b h-fit prose lg:prose-lg flex justify-center min-w-[100%]">
      <div className="flex h-fit border rounded-xl shadow-xl p-10 bg-indigo-900 text-white w-1/2 ">
        <Markdown>
          {post}
        </Markdown>
      </div>
    </div>
  )
}

export default Blog
