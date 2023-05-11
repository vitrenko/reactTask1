import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Blog.module.scss";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(res.data);
            } catch(err) {
                console.log(err);
            }
            
        };
        fetchPosts();
    }, [])

    return (
        <>
            <h1>Blog</h1>
            <div className={style.postsContainer}>
                {posts.map((post) => (
                    <div key={post.id} className={style.postWrap}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <a href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}>Go to this post</a>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Blog;