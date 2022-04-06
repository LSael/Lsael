import { useParams } from "react-router-dom";
import data from '../../database/db.json';

const Theme = () => {
    const { slug } = useParams();
    const dataTheme = data.themes.filter((theme) => {
       if (theme.id === slug) {
           return (theme)
       }
    });

    if (dataTheme[0].articles.length > 0) {
        return ( 
            <div className="themeCategory">
                <h1>Ceci est le theme {dataTheme[0].id}</h1>
                <ul>
                    {dataTheme[0].articles.map((article) => {
                        return (
                            <div className="articleButton" key={article.id}>
                                <h3>{article.name}</h3>
                                <p>{article.description}</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="themeCategory">
                <h1>Ceci est le theme {dataTheme[0].id}</h1>
                <p className="noArticle">Il n'y a pas encore d'article dans cette catégorie, veuillez nous
                excuser pour la géne occasionnée :)</p>
            </div>
        )
    }}

export default Theme;