import React from "react";
import ResponsiveDrawer from "./Admin/Layout";
import ResponsiveAppBar from "./User/UserLayout";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./User/Home/Home";
import AboutUs from "./User/AboutUs/AboutUs";
import Blog from "./User/Blog/Blog";
import UserLayout from "./User/UserLayout";
import ContactUs from "./User/ContactUs/ContactUs";
import SingleBlog from "./User/Blog/SingleBlog";

function App() {
  // const [a, setA] = React.useState("Hello");
  // const [b,setB] = React.useState("Hy");


  // React.useEffect(() => {
  //   console.log("This is useeffect");
  // });


  // React.useEffect(() => {
  //   console.log("This is second useeffect");
  // },[]);


  // React.useEffect(() => {
  //   console.log("This is third useeffect");
  // },[a]);

  return (
    <>
      {/* <button onClick={() => setA('hey there')}>Change me</button>
      <button onClick={() => setB('heysd there')}>Change sme</button>

      {a}{b} */}
      <Router>
        <Routes>
          <Route path="" element={<UserLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/blog/:id" element={<SingleBlog/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
