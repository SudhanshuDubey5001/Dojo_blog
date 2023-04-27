import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <p>Sorry, this page does not exist</p>
            <Link to = "/">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;