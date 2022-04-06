import { Routes,Route } from "react-router-dom";
import Home from './main/home';
import Board from './main/board';
import Analytics from "./main/analytics";
import About from './main/about/about';
import Theme from "./main/home/theme";
import Article from "./main/home/Article";

const Main = () => {
    return ( 
        <div className="mainPage">
        <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/theme/:slug" element={<Theme />} />
                    <Route path="/theme/:slug/:articleSlug" element={<Article />} />
            <Route path="/tableaudebord" element={<Board />} />
            <Route path="/bilan" element={<Analytics />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
     );
}
 
export default Main;