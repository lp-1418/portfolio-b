import { useEffect, useState } from "react"
import "../components/landing/landing.css"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function Blog() {
  const [postLists, setPostsLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostsLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  })
  return (
    <div className="hero-b min-h-[60vh]">
      {postLists.map((post) => {
        return <div key={post.id}>{post.title} {post.postText}</div>
      })}
    </div>
  )
}

export default Blog
