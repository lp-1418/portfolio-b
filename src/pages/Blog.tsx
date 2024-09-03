import "../components/landing/landing.css"
import BlogCard from "../components/blog/BlogCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Blog() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="hero-b min-h-[85vh] h-fit prose flex-wrap lg:prose-lg items-center flex justify-around w-full  xl:min-w-[100%]">
      <div className="flex flex-col items-center xl:flex-row xl:flex-wrap xl:justify-between w-full xl:w-[70%] gap-10">
        <BlogCard title="Blog 1" />
        <BlogCard title="Blog 2" />
        <BlogCard title="Blog 3" />
        <BlogCard title="Blog 4" />
        <BlogCard title="Blog 5" />
        <BlogCard title="Blog 6" />

      </div>
    </div>
  )
}

export default Blog
