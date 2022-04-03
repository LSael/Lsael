import { Route } from 'react-router-dom';
import data from '../../database/db.json'

const themelist = data.themes.id;

const Theme = () => {
    themelist.map((theme) => {
        return (
            <Route to={`/${theme}`} element={theme} />
        )
    })
}
 
export default Theme;
