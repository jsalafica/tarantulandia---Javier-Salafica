
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";

function App() {
    return (
    <div className="App">
        <NavBar />
        <header className="App-header">
            <Titulo titulo="Tarantulandia!!"/>
        </header>
    </div>
    );
}

export default App;