import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
    const params = useParams();
    const [post, setPost] = useState({ post: {} });
    const [isLoded, setIsLoded] = useState({ isLoded: false });

    useEffect(() => {
        fetch("https://api.kzaman.me/api/v1/post?slug=" + params.slug)
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setPost(result.post);
                setIsLoded(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.slug]);
    return (
        <div className="container">
            <div className="row">
                {isLoded ? (
                    <div className="col-lg-8">
                        <h1 className="mt-4">{post.title}</h1>

                        <p className="lead">
                            by
                            <a href="/">Start Bootstrap</a>
                        </p>

                        <hr />

                        <p>Posted on {post.created_at}</p>

                        <hr />

                        <img
                            className="img-fluid rounded"
                            src={post.image}
                            alt=""
                        />

                        <hr />

                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus, vero, obcaecati, aut, error quam
                            sapiente nemo saepe quibusdam sit excepturi nam quia
                            corporis eligendi eos magni recusandae laborum minus
                            inventore?
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ut, tenetur natus doloremque laborum quos iste
                            ipsum rerum obcaecati impedit odit illo dolorum ab
                            tempora nihil dicta earum fugiat. Temporibus,
                            voluptatibus.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eos, doloribus, dolorem iusto blanditiis unde
                            eius illum consequuntur neque dicta incidunt ullam
                            ea hic porro optio ratione repellat perspiciatis.
                            Enim, iure!
                        </p>

                        <blockquote className="blockquote">
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer posuere erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Error, nostrum, aliquid, animi, ut quas
                            placeat totam sunt tempora commodi nihil ullam alias
                            modi dicta saepe minima ab quo voluptatem obcaecati?
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Harum, dolor quis. Sunt, ut, explicabo,
                            aliquam tenetur ratione tempore quidem voluptates
                            cupiditate voluptas illo saepe quaerat numquam
                            recusandae? Qui, necessitatibus, est!
                        </p>

                        <hr />

                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="media mb-4">
                            <img
                                className="d-flex mr-3 rounded-circle"
                                src="http://placehold.it/50x50"
                                alt=""
                            />
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac
                                nisi vulputate fringilla. Donec lacinia congue
                                felis in faucibus.
                            </div>
                        </div>

                        <div className="media mb-4">
                            <img
                                className="d-flex mr-3 rounded-circle"
                                src="http://placehold.it/50x50"
                                alt=""
                            />
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac
                                nisi vulputate fringilla. Donec lacinia congue
                                felis in faucibus.
                                <div className="media mt-4">
                                    <img
                                        className="d-flex mr-3 rounded-circle"
                                        src="http://placehold.it/50x50"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <img
                                        className="d-flex mr-3 rounded-circle"
                                        src="http://placehold.it/50x50"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-border text-info"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Search</h5>
                        <div className="card-body">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for..."
                                />
                                <span className="input-group-append">
                                    <button
                                        className="btn btn-secondary"
                                        type="button"
                                    >
                                        Go!
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="/category">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="/category">HTML</a>
                                        </li>
                                        <li>
                                            <a href="/category">Freebies</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="/category">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="/category">CSS</a>
                                        </li>
                                        <li>
                                            <a href="/category">Tutorials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4">
                        <h5 className="card-header">Side Widget</h5>
                        <div className="card-body">
                            You can put anything you want inside of these side
                            widgets. They are easy to use, and feature the new
                            Bootstrap 4 card containers!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
