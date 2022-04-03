import { Link } from "react-router-dom";

const Banner = () => {
    return ( 
        <div className="banner">
            <h2 className="bannerTitle">Ally</h2>
        </div>
     );
}

const NavBar = () => {
    return ( 
        <ul className="navBar">
            <Link to='/' className="navElement">Accueil</Link>
            <Link to='/tableaudebord' className="navElement">Tableau de bord</Link>
            <Link to='/bilan' className="navElement">Bilan</Link>
        </ul>
     );
}

const Header = () => {
    return (
        <div>
            <Banner />
            <NavBar />
        </div>

        );
}
 
export default Header;