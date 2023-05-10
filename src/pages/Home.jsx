import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";


const Home = () => {
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
            <h1>Home</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>
        </>
    )
};

export default Home;