import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogsURL: blogs, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory(); //to send back the user to homepage

    const handleDeleteBlog = () => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(() => {
            console.log("Blog deleted!!");
            history.push("/");
        });
    }

    return (
        <div className="blog-article">
            {loading && <div>{loading}</div>}
            {error && <div>{error}</div>}
            {blogs && <div>
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <p>{blogs.body}</p>
                    <button onClick={() => handleDeleteBlog()}>Delete Blog</button>
                </article>
            </div>}
        </div>

    );
}

export default BlogDetails;