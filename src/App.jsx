import Body from "./components/Body/Body";
import Category from "./components/Body/Category/Category";
import Posts from "./components/Body/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Body>
                <Posts />
                <Category />
            </Body>
            <Footer />
        </div>
    );
}

export default App;
