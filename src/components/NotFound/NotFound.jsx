import React from "react";
function NotFound() {
    return (
        <div className="container">
            <div style={{ minHeight: "100vh", padding: "100px 0px" }}>
                <h1 className="my-5">
                    <strong>Page Not Found</strong>
                </h1>
                <h5>We couldn't find what you were looking for.</h5>
                <p className="my-5">
                    Please contact the owner of the site that linked you to the
                    original URL and let them know their link is broken.
                </p>
            </div>
        </div>
    );
}

export default NotFound;
