import { useParams } from "react-router-dom";
import data from '../../database/db.json';

const Theme = () => {
    const { slug } = useParams();
    const dataTheme = data.themes.filter((theme) => {
       if (theme.id === slug) {
           return (theme)
       }
    });

    return ( 
        <h1>Ceci est le theme {dataTheme[0].id}</h1>
     );
}
 
export default Theme;