import { Routes,Route } from "react-router-dom";
import Home from './main/home';
import Board from './main/board';
import Analytics from "./main/analytics";
import About from './main/about/about';
import ThemeListing from "./main/home/theme";

const Main = () => {
    return ( 
        <div className="mainPage">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tableaudebord" element={<Board />} />
            <Route path="/bilan" element={<Analytics />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
     );
}
 
export default Main;