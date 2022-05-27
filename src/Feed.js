import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./Firebase";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [posts, setPosts] = useState([{ id: "", data: "" }]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="feed" style={{ flex: "0.4" }}>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.verified}
            text={post.data.text}
            image={post.data.image}
            avatar={post.data.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
