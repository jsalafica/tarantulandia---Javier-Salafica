import "./App.css";
import Counter from "./components/Counter/Counter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";

function App() {

    return (
    <div>
        <header>
            <NavBar />
            <Titulo titulo="Tarantulandia!!"/>
            <ItemListContainer />
            <Counter />
        </header>
    </div>
    );
}

export default App;