import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//console.log(blogData);
const {about,image,name,posts} = blogData


function App() {
  return (
    <div className="App">
      <Header name={name}/>
      <About about={about} image={image}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
