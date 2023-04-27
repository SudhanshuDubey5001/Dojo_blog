import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogListURL = ({ blogs, title }) => {
    return (
        <div className="blog-lists">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* we used Link here bcz we want to use routes */}
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogListURL;