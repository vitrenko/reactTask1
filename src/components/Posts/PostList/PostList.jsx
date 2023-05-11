import { useState } from "react";
import PostItem from "../PostItem/PostItem";

const PostList = () => {
    const [posts, setPosts] = useState([
        {
            postId: 1,
            postTitle: "This is Post 1",
            postBody: "Lorem ipsum dolor"
        },
        {
            postId: 2,
            postTitle: "This is Post 2",
            postBody: "sit amet, consectetur adipiscing elit"
        },
        {
            postId: 3,
            postTitle: "This is Post 3",
            postBody: "Sed ex nisl, blandit sit amet laoreet"
        }
    ]);

    return (
        <>
            {posts.map(post => <PostItem key={post.postId} {...post} />)}
        </>
    );
};

export default PostList;