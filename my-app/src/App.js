import './App.css';
import Card from "./components/cardPets";
import Footer from "./components/footer";
import Header from "./components/header";


function App() {
    return ( 
            <div className = "App">
                <div>
                    <Header/>
                    <Card/>
                    <Footer/>
                </div>
            </div>
    );
}

export default App;