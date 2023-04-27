// now we will get the "blogs" passed as props which we can access here 

//this is the way to use props -->
// const BlogList = (props) => {
//     const blogs = props.blogs
//     const title = props.title

//but we can use it directly like this as well
const BlogList = ({blogs, title, handleDeleteBlog}) => {
    return ( 
        <div className="blog-lists">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* lets add a delete button */}
                    <button onClick={() => handleDeleteBlog(blog.id)}>Delete Blog</button>
                    {/* but we will not make the handleDeleteBlog here, we will do it in the 
                    parent js file where we are getting the data from. */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;