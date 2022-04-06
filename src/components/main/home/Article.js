import { useParams } from "react-router-dom";
import data from "../../database/db.json"

const Article = () => {
    const { articleSlug,slug } = useParams();
    const dataTheme = data.themes.filter((theme) => {
            if (theme.id === slug) {
                return (theme)
            }
        });
    const dataArticle = dataTheme[0].articles.filter((article) => {
        if (article.id === articleSlug) {
            return (article)
        }
    });
    return ( 
        <h1>Wesh gros ! t'es sur l'article {dataArticle[0].name} mon frère ! </h1>
     );
}
 
export default Article;