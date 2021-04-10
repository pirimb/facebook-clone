import React, { useEffect, useState } from 'react'
import db from '../firebase'
import Post from '../Post/Post'
import PostSender from '../PostSender/PostSender'
import './Content.css'
import StoryReel from './StoryReel'

function Content() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }, []);

    return (
      <div className="content">
        <StoryReel />
        <PostSender />

        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.data.image}
            message={post.data.message}
            profileSrc={post.data.profileSrc}
            timestamp={post.data.timestamp}
            username={post.data.username}
          />
        ))}
      </div>
    );
}

export default Content
