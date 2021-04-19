import React from "react";

function SinglePost({ post }) {
    return (
        <div className="card mb-4">
            <img className="card-img-top" src={post.image} alt="card" />
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <a href="/blog" className="btn btn-primary">
                    Read More &rarr;
                </a>
            </div>
            <div className="card-footer text-muted">
                Posted on {post.posted} by
                <a href="/blog"> {post.user.name}</a>
            </div>
        </div>
    );
}

export default SinglePost;
