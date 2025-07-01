import { BrowserRouter, Routes, Route } from "react-router";
import{HomePage} from "./pages/HomePage.jsx";
import{searchPage} from "./pages/searchPage.jsx";
import{ViewPage} from "./pages/ViewPage.jsx";
import{NotFoundPage} from "./pages/NotFoundPage.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/search" element={<h2>Search Page</h2>} />
                <Route path="/view" element={<h2>View Page</h2>} />
                <Route path="*" element={<h2>Oops... PAGE NOT FOUND!</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;