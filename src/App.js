
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";

function App() {
    return (
    <div className="App">
        <NavBar />
        <header className="App-header">
            <Titulo titulo="Tarantulandia!!"/>
            <ItemListContainer greeting="Bienvenidos a mi portal!!"/>
        </header>
    </div>
    );
}

export default App;