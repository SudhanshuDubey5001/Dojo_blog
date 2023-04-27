import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
    // we will make a way so that we can track the input 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    //for loading status
    const [pending, setPending] = useState(false);
    const history = useHistory();   //to push user to different pages using history 

    const handleSubmit = (e) => {
        e.preventDefault(); //this will prevent the page to refresh when we click the button
        //lets post the blog on the json-server--->
        const blogObject = { title, body, author };
        setPending(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogObject)
        }).then(() => {
            setPending(false);
            console.log("New blog added!!! ");
            // history.go(-1);     make user go one step back in history
            history.push("/");  //user will be pushed to homepage
        });
    }

    return (
        <div className="create">
            <h2>Add New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text" required
                    value={title}   //we can set the current value
                    onChange={(e) => { setTitle(e.target.value) }}>
                </input>
                <label>Blog details</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Addding Blog...</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    );
}

export default CreateBlog;