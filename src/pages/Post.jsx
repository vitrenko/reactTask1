import { useParams, useLocation } from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const location = useLocation();

    console.log(id);
    console.log(location);

    return <div>Post</div>;
};