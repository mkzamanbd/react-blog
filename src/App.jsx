import Body from "./components/Body/Body";
import Category from "./components/Body/Category/Category";
import Posts from "./components/Body/Posts/Posts";
import SinglePost from "./components/Body/SinglePost/SinglePost";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Body>
                <Switch>
                    <Route exact path="/">
                        <Posts />
                        <Category />
                    </Route>

                    <Route path="/article/:slug">
                        <SinglePost />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Body>

            <Footer />
        </Router>
    );
}

export default App;
