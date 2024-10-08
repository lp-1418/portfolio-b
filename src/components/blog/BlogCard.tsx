import { Link } from 'react-router-dom'

function BlogCard({ title }) {
  return (
    <Link to={`/blog/${encodeURIComponent(title)}`}>

      <div className="transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200  rounded-xl xl:h-[35vh] p-5 glass w-80">
        <figure className=''>
          <img
            className='rounded-xl'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!" />
        </figure>
        <div className="">
          <h2 className="">{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
