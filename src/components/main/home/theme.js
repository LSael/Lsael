import { Link, useParams } from "react-router-dom";
import data from '../../database/db.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

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
                <FontAwesomeIcon icon={dataTheme[0].icon} className="themeCategoryIcon"/>
                <ul className="articleList">
                    {dataTheme[0].articles.map((article) => {
                        return (
                            <Link to={`/theme/${slug}/${article.id}`} key={article.id}>
                                <div className="articleButton">
                                    <FontAwesomeIcon icon={article.icon} className="articleButtonIcon"/>
                                    <h2 className="articleButtonTitle">{article.title}</h2>
                                    <p className="articleButtonDescription">{article.description}</p>
                                </div>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="themeCategory">
                <FontAwesomeIcon icon={dataTheme[0].icon} className="themeCategoryIcon"/>
                <p className="noArticle">Il n'y a pas encore d'article dans cette catégorie, veuillez nous
                excuser pour la géne occasionnée :)</p>
            </div>
        )
    }}

export default Theme;