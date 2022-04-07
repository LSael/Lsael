import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../database/db.json"

const ArticleText = (props) => {
    return (
        <div className="articleHead">
            <h2 className="articleTitle">{props.data.name}</h2>
            <p className="articleText">{props.data.text}</p>
        </div>
    )
}

    /*const [blague,setBlague] = useState('');
    useEffect(() => {
        axios.get('https://api.blablagues.net/?rub=blagues')
        .then((response) => setBlague(response.data.data.content.text_head));
},[]) 

    return ( 
        <div className="homePage">
            <p>{blague}</p>
        </div>
     );
}
*/

const ArticleChart = (props) => {
    const today = new Date();
    console.log(today);
    const [state,setState] = useState('');
    let testList = [];
    useEffect(() => {
        axios.get(`https://coronavirusapifr.herokuapp.com/data/live/france`)
        .then((response) => {testList.push(response.data[0])})
        .then(console.log(testList))
    }, [])
    return (
        <p></p>
    )
}

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
        <div className="article">
            <ArticleText data={dataArticle[0]} />
            <ArticleChart />
        </div>
     );
}
 
export default Article;