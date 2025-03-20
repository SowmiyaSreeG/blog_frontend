import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Blog from "./Blog";
import Post from "./Post"
import Category from "./Category";
import AddPost from "./AddPost";
import "./App.css"
import Sidebar from "./Sidebar";
// import VerifiedPost from "./VerifiedPost";


const App = () => {
  return (
    <Router>
      <div className="d-flex div ms-250px" >
       
        <div className="flex-grow-1 ">
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path ="/blog" element={
            <div className = "d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-4">
                <Blog />
              </div>
            </div>
          }/> 

<Route path ="/category" element={
            <div className = "d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-4">
                <Category />
              </div>
            </div>
          }/> 

<Route path ="/addpost" element={
            <div className = "d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-4">
                <AddPost />
              </div>
            </div>
          }/> 

<Route path ="/post" element={
            <div className = "d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-4">
                <Post />
              </div>
            </div>
          }/> 

          
{/* <Route path ="/verifiedpost" element={
            <div className = "d-flex">
              <Sidebar />
              <div className="flex-grow-1 p-4">
                <VerifiedPost />
              </div>
            </div>
          }/>  */}
            
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/post" element= {<Post/>}/>
            <Route path="/addpost" element= {<AddPost />}/>
            {/* <Route path="/verifiedpost" element= {<VerifiedPost />}/> */}
            <Route path="/category" element= {<Category />}/>
            <Route path="/categories" element={<h2>Categories</h2>} />
            <Route path="/users" element={<h2>Users</h2>} />
            <Route path="/settings" element={<h2>Settings</h2>} />
            <Route path="/logout" element={<h2>Logging out...</h2>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;