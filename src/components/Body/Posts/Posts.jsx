import React, { Component } from "react";
import SinglePost from "./SinglePost/SinglePost";

export default class Posts extends Component {
    state = {
        posts: [],
        isLoded: false,
    };

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        fetch("http://blog.laravel.test/api/v1/posts")
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                this.setState({
                    posts: result.posts,
                    isLoded: true,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let { posts, isLoded } = this.state;
        let postData = posts.data;
        return (
            <div className="col-md-8">
                <h1 className="my-4">
                    Page Heading
                    <small>Secondary Text</small>
                </h1>

                {isLoded ? (
                    <div>
                        {postData.map((post) => (
                            <SinglePost post={post} key={post.id} />
                        ))}
                        <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                                <a className="page-link" href="/">
                                    &larr; Older
                                </a>
                            </li>
                            <li className="page-item disabled">
                                <a className="page-link" href="/">
                                    Newer &rarr;
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}