import React, { Component } from "react";

let elems = {
  postTitle: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  content: "body property",
  comments: "Comments:",
  commentOne: "First!"
};

class PostTitle extends Component {
  render() {
    return <h1>{this.props.postTitle}</h1>;
  }
}

class Author extends Component {
  render() {
    return <p>by {this.props.author}</p>;
  }
}

class Content extends Component {
  render() {
    return <p>Check out this {this.props.content}!</p>;
  }
}

class Comments extends Component {
  render() {
    return <h4>{this.props.comments}</h4>;
  }
}

class CommentOne extends Component {
  render() {
    return <p>{this.props.commentOne}</p>;
  }
}

class Post extends Component {
  render() {
    return (
      <div>
        <PostTitle postTitle={elems.postTitle} />
        <Author author={elems.author} />
        <Content content={elems.content} />
        <Comments comments={elems.comments} />
        <CommentOne commentOne={elems.commentOne} />
      </div>
    );
  }
}

export default function App() {
  return <Post />;
}
