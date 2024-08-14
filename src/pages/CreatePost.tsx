import { useState } from 'react'
import "../components/landing/landing.css"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function CreatePost() {
  // FIX: Protected routes
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, { title, postText })
  }

  return (
    <div className="min-h-[70vh] hero-b">
      <div className="">
        <h1 className='text-3xl'>Create a post</h1>
        <div>
          <div>
            <label>Título</label>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" onChange={(event) => { setTitle(event.target.value) }} />
          </div>
          <div>
            <label>Contenido</label>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              onChange={(event) => { setPostText(event.target.value) }}
            ></textarea>
          </div>
          <button onClick={createPost} className='btn'>Crear</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
