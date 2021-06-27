import React, { Component } from "react";

export default class Category extends Component {
    state = {
        categories: [],
        isLoded: false,
    };

    componentDidMount() {
        this.fetchCategories();
    }

    fetchCategories() {
        fetch("http://demo-laravel.test/api/v1/category")
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                this.setState({
                    categories: result.categories,
                    isLoded: true,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        let { categories, isLoded } = this.state;
        return (
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
                            <div className="col-lg-12">
                                {isLoded ? (
                                    <div className="row">
                                        {categories.map((category) => (
                                            <div
                                                className="col-md-6"
                                                key={category.id}
                                            >
                                                <div>
                                                    <a href="/category">
                                                        {category.name}
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-center">
                                        <div
                                            className="spinner-border text-info"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                )}
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
        );
    }
}
