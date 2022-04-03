import ThemesButtons from "./home/themesButtons";
import WelcomeText from "./home/welcomeText";

const Home = () => {
    return (
        <div className="HomePage">
            <WelcomeText />
            <ThemesButtons />
        </div>
    )
}
    
    export default Home;



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