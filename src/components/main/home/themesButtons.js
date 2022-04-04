import data from '../../database/db.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
library.add(fas)

const ThemesButtons = () => {
    const themeList = data.themes.map((theme) => {
        return (
                <Link to={`/theme/${theme.id}`}>           
                    <li className='themeButton' key={theme.id}>
                        <div>
                            <FontAwesomeIcon icon={theme.icon} className='themeIcons' />
                            <p className='themeName'>{theme.name}</p>
                        </div>
                    </li>
                </Link>
    )})

    return ( 
        <ul className='themeList'>
            {themeList}
        </ul>
     )
}
 
export default ThemesButtons;

/*
Buttons pour les themes (nom_des_themes, icones_des_themes)
    => Buttons pour les articles (titre_article, description_article)
        => Article/Appel API (contenu_article, appel_API)
*/