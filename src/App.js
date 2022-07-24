import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./nav";
import React, { useState , useContext} from "react";
import { useNavigate } from "react-router";

const LoggedUSer=React.createContext();
function App() {
  const [loggedIn, changeStatusLoggedIn] = useState(1);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Blog loggedIn={loggedIn} />} />
        <Route path="/myBlogs" element={<MyBlog />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </div>
  );
}
// const Nav = () => {
//   return (
//     <div className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Signup</Link>
//     </div>
//   );
// };

const Blog = (props) => {
  let navigate = useNavigate();

  if (props.loggedIn === 1) {
    return (
      <div>
        <Nav />
      </div>
    );
  } else {
    navigate("/login");
  }
};
const Login = () => {
  return (
    <div>
      {" "}
      <Nav />
    </div>
  );
};
const Signup = () => {
  return (
    <div>
      {" "}
      <Nav />
    </div>
  );
};
const Signout = () => {
  return (
    <div>
      {" "}
      <Nav />
    </div>
  );
};

const MyBlog = () => {
  return (
    <div>
      {" "}
      <Nav />
    </div>
  );
};

export default App;
