import React from "react";
import { Link } from "react-router-dom";

function Item({ post }) {
    return (
        <div className="card mb-4">
            <img className="card-img-top" src={post.image} alt="card" />
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <Link to={`/article/${post.slug}`} className="btn btn-primary">
                    Read More &rarr;
                </Link>
            </div>
            <div className="card-footer text-muted">
                Posted on {post.posted} by
                <a href="/blog"> {post.user.name}</a>
            </div>
        </div>
    );
}

export default Item;
