import React from "react";

function Article ({ title, date = "January 1, 1970", preview }) {
    // const articles = posts.map((post) => (
    //     <Article
    //     key={post.id}
    //     title={post.title}
    //     date={post.date}
    //     preview={post.preview}
    //     minutes={post.minutes}
    //     />   
    //      ))
    return (
      <article>
          <h3>{title}</h3>
          <small>{date}</small>
          <p>{preview}</p>
      </article>
    )}

  export default Article
