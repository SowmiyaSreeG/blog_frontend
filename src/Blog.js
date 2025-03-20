import React from "react";

const Blog = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome {sessionStorage.getItem('username')}</h1>
      <p>You have successfully logged in!</p>
    </div>
  );
};

export default Blog;
