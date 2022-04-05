import { useParams } from "react-router-dom";
import data from '../../database/db.json';

const Theme = () => {
    const { slug } = useParams();
    const dataTheme = data.themes.map((theme) => {
       if (theme.id === slug) {
           return (theme)
       } else {
           return ("test")
       }
    });

    console.log(dataTheme);
    return ( 
        <h1>Ceci est le theme</h1>
     );
}
 
export default Theme;