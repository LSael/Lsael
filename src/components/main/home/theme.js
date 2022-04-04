import { useParams } from "react-router-dom";

const Theme = () => {
    const { slug } = useParams();

    return ( 
        <h1>Ceci est le theme {slug}</h1>
     );
}
 
export default Theme;