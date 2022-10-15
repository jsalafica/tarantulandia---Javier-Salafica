import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Titulo from "./components/Titulo/Titulo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider  from "./context/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
    return (
    <div>
        <header>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    {/* <Titulo titulo="Todas las especies"/> */}
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="category/:categoryName" element={<ItemListContainer />} />
                        <Route path="stage/:stageStatus" element={<ItemListContainer />} />
                        <Route path="details/:id" element={<ItemDetailContainer />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </header>
    </div>
    );
}

export default App;