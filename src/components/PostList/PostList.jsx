import { useState } from "react";
import PostItem from "../PosItem/PosItem";

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

    const showPosts = post => <PostItem postTitle={post.postTitle} postBody={post.postBody} />;

    return (
        <div>
            {
                posts.forEach(post => showPosts(post))
            }
        </div>
    );
};

export default PostList;