import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogListURL from "./BlogListURL";
import useFetch from "./useFetch";


const Home = () => {
    // make a function to handle click
    const handleClick = () => {
        console.log("Button clicked!!!!");
    }

    const handleClickAgain = (name) => {
        console.log("Clicked with name: " + name);
    }

    //there is automatic argument e we can use to see the events log like 
    const seeEvents = (e) => {
        console.log(e);
        // you can use the event properties 
        console.log(e.type);
    }

    // now we will see how to update the UI reactively. bcz if we just do this-->
    let name = "sudhanshu"
    const changeName = (_name) => {
        name = _name
    }
    //it is not going to work bcz it is not reactive. In order for React to watch this value
    // we will use state. we will use useState hook from React library  

    const [nameReactive, setName] = useState("sudhanshu");
    const handleChangeName = () => {
        setName("Jason Bond");
    }

    //make new blogs using useState
    const [blogs, setBlogs] = useState([
        { title: "Blog 1", body: "This is blog 1", author: "Mario", id: 1 },
        { title: "Blog 2", body: "This is blog 2", author: "Luigi", id: 2 },
        { title: "Blog 3", body: "This is blog 3", author: "James", id: 3 }
    ]);

    //to delete the blogs
    const handleDeleteBlog = (id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    }

    //useEffect is another hook that runs a code every time the UI re-renders. just like in 
    // in compose, whenever it re-composes, useEffect will run a code.
    //if we want to run this only once, then just add a empty dependency array
    // now if you add a item in dependency array, it will watch that value only and the function
    // will run only when that item changes. 
    // so lets demonstrate this by creating a useState value
    const [name_test, setName_test] = useState("sudhanshu");
    useEffect(() => {
        console.log("Use effect ran!!!");
        console.log(blogs);
    }, [name_test])
    // useEffect is a good place to fetch data from server. 
    // so first we will make our own JSON data ----> make it in data folder
    //now get the JSON server running to get a link which we can call and fetch/update data
    // we can do this by using json-server package. To get that and also get it running 
    // while watching the json file we created. open terminal and write this--
    // npx json-server --watch src/data/db.json --port 8000
    // this should get the server running and give you a link for the json data. we ran it on 
    // port 8000 bcz default is 3000 where our react project is already running.  

    //now lets make the fetch request. So we will create another bloglist under the main blog 
    // so we can understand the blogs fetched from URL. 

    //uncomment this to understand or see the useFetch file
    // const [blogsURL, setBlogsURL] = useState(null); //making this null cuz we will get it from URL
    // // add a loading placeholder as well
    // const [loading, isLoading] = useState(true);
    // const [error, setError] = useState(null) //we will show the error message

    // useEffect(() => {
    //     fetch("http://localhost:8000/blogs")
    //     .then((res) => {
    //         // first check if res is not empty
    //         if(!res.ok){
    //             throw Error("Unable to fetch resource from server");
    //         }else{
    //             return res.json();     
    //         }
    //     }).then((data) => {
    //         setBlogsURL(data);
    //         isLoading(false);
    //         setError(null);     //need to reset the error message if it occurs later
    //     }).catch(err => {
    //         setError(err.message);
    //         isLoading(false);
    //     })
    // },[])

    // now we can make all that above code reusable by creating a custom hook. 
    // see the file useFetch.js

    //this is how we implement it if we use the custom hook like useFetch
    const { blogsURL, loading, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* make a button and handle its click 
            if you write handleClick(), it will automatically invoke*/}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* now if we want to invoke a function with arguments, we can't do it like 
            handleClick(args) bcz it will invoke on its own. So to solve this we wrap it around
            anonymous function */}
            {/* <button onClick={() => handleClickAgain("Sudhanshu")}>Click me again</button> */}
            {/* <button onClick={seeEvents}>See events</button> */}
            {/* <p>{name}</p> */}
            {/* <p>{nameReactive}</p> */}
            {/* <button onClick={() => setName("Jason Bond")}>Change the name</button> */}
            {/* <button onClick={handleChangeName}>Change name</button> */}

            {/* for the list of values, we will make a base template and cycle through the elements */}
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            {/* but what if we want to make this component resusable. Then we create a 
            new file BlogList.js and paste it there */}
            {/* we passed blogs as a props so that it can access the data/list of here */}
            {/* <BlogList blogs={blogs} */}
                {/* title="All Blogs" */}
                {/* handleDeleteBlog={handleDeleteBlog} /> */}
            {/* you can filter the list using props too */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} */}
                {/* title="Mario Blogs" handleDeleteBlog={handleDeleteBlog} */}
            {/* /> */}

            {/* lets see how the dependency array works in useEffect  */}
            {/* <p>{name_test}</p> */}
            {/* <button onClick={() => setName_test('dubey')}>Change name</button> */}

            {/* we will use BlogListURL under the main one */}
            {/*  && operator is used as a null check. If blogsURL is null, right side will not run */}
            {error && <div>Error: {error}</div>}
            {loading && <div>Loading...</div>}
            {blogsURL && <BlogListURL blogs={blogsURL}
                title="My blogs" />}
        </div>
    );
}
export default Home;
