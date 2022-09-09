import "./App.css";
// import Counter from "./components/Counter/Counter";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

    return (
    <div>
        <header>
            <NavBar />
            <Titulo titulo="Tarantulandia!!"/>
            {/* <Counter /> */}
            {/* <ItemListContainer /> */}
            <ItemDetailContainer />
        </header>
    </div>
    );
}

export default App;