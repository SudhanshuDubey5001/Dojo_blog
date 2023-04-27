import { Link } from "react-router-dom/cjs/react-router-dom.min";

//write "sfc" to create the template
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>The Dojo Blog</h1>
            </Link>
            <div className="links">
                {/* we can insert dynamic js code for css here by  {{double curly}}*/}
                {/* cuz one is for dyanamic js and other is for using JS object inside 
                like const person = {name= "ss", age = 20}*/}

                {/* in order to make these links localized meaning, they shouldnt request it from
                server, we use Link component from react-router-dom*/}
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "#590b0b",
                    borderRadius: '8px'
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#590b0b",
                    borderRadius: '8px'
                }}>Create Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;