import logo from './logo.svg';
import Navbar from './NavBar';  //import the other files you made
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


// React application is made of components. Components are the building blocks of React
// We provide all the components to ReactDOM and it renders it and displays it as we
// want. Components consists of - 
// -- Template : where we can design what we want and how it should look
// -- Logic: which is javascripts allowing us to build logic like if a button is clicked

//all these dyanamic values will be converted to string
const title = "Welcome to React buddy!!"
const likes = 50
//these cannot be converted to String --> 
const person = { name: "Sudhanshu", age: 20 }
const isTrue = true

const link = "https://www.google.com"

//now see the index.js file 
//function App() is being redenred on the root. 
function App() {
  return (
    // this is "jsx" NOT HTML. It is quite similar to HTML. 
    // A transpiler called "babel" converts all the jsx code to HTML and then renders it to DOM

    //since "class" is taken by HTML, we use "className" in jsx
    <div className="App">
      <div className="content">
        {/* we use curly braces to use dynamic values like title */}
        <h1>{title}</h1>
        <p>Like this site {likes} times</p>
        {/* jsx converts every dyanamic variable to String and display it. Except: object and boolean */}
        {/* we can insert js code in curly braces, it will converted to string */}
        {/* Numbers------> */}
        <p>{10}</p>
        {/* array----> */}
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        {/* Strings ---> */}
        <p>{"I am a stealthy ninja"}</p>
        {/* js ready made objects */}
        <p>{Math.random() * 100}</p>
        {/* hyperlinks */}
        <a href={link}>Google link</a>
      </div>
    </div>
  );
}

//at the end we export our function because we need to import it in index.js
// export default App; 


//So overall, we make components like this - 
// function "name" {
//   return(
//     jsx lines of code
//   );
// }
// export default name;  ---> so we can use this elsewhere


// Component tree ---> 
//              App.js (root)
// Navbar.js    Sidebar.js    BlogDetails.js   (children)

// now lets create the navbar.js ....see that file
//once finished, import it here

// now we will use those files --> 
// see the index.css file now!!!!!
// then see the Home.js where we did some changes
// once you got Home.js, now come back here and now we will create routes



function App2() {
  return (
    // we want the entire app to use router, so we wrap it around Router
    <Router>
      <div className="App2">
        <Navbar />
        <div className="content">
          {/* we want to show only one route at a time which we will be taken care by Switch */}
          <Switch>
            {/* now we will show the route of home 
            we use the keyword exact because we need to tell react that the path should match 
            exactly "/" or "/create" to trigger Home or create component
            otherwise "/" and "/create" or "/c" are all same to this dumbass*/}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <CreateBlog />
            </Route>
            {/* we use semicolon ":" to send data to other pages. See BlogDetails.js 
            file to understand how to catch those data */}
            <Route exact path='/blogs/:id'>
              <BlogDetails />
            </Route>
            {/* for any other path that is invalid (make sure to put this one at very bottom
              bcz it will match to any of those above ones)*/}
            <Route path='*'>  
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App2;