import "./App.css";
// import Counter from "./components/Counter/Counter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/cartContext";

function App() {

    return (
    <div>
        <header>
            <CartContext.Provider value={[]}>
                <BrowserRouter>
                    <NavBar />
                    <Titulo titulo="Tarantulandia!!"/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="category/:categoryName" element={<ItemListContainer />} />
                        <Route path="stage/:stageStatus" element={<ItemListContainer />} />
                        <Route path="details/:id" element={<ItemDetailContainer />} />
                        <Route path="cart" element={<p>Agregado al carrito</p>} />
                    </Routes>
                    {/* <Counter /> */}
                    {/* <ItemListContainer /> */}
                    {/* <ItemDetailContainer /> */}
                </BrowserRouter>
            </CartContext.Provider>
        </header>
    </div>
    );
}

export default App;