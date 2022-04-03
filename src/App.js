import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import './styles/style.css'

const App = () => {
  return ( 
    <div className="appGlobal">
        <Header />
        <Main />
        <Footer />
    </div>
   );
}
 
export default App;