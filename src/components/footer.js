import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <ul className="footer">
            <Link to='/about' className="footerElement">A propos</Link>
            <li className="footerElement">Mentions légales</li>
            <li className="footerElement">Contact</li>
        </ul>
     );
}
 
export default Footer;