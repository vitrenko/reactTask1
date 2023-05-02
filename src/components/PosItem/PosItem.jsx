const PostItem = (title, body) => {
    const postTitle = "This is the first post";

    return (
        <div>
            <h3 className="postTitle">{title}</h3>
            <p className="postBody">{body}</p>
        </div>
    );
};

export default PostItem;