import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
      axios
        .get("https://644d6096cfdddac970a3783e.mockapi.io/items")
        .then((res) => setItems(res.data));

        axios
          .get("https://644d6096cfdddac970a3783e.mockapi.io/cart")
          .then((res) => setCartItems(res.data));

        axios
          .get("https://644d6096cfdddac970a3783e.mockapi.io/cart")
          .then((res) => res.data.filter((f) => Object.keys(f).includes("favorite")))
          .then((res) => setFavorites(res));
        
  }, []);

  const addItemInCart = (obj) => {
    
    axios
      .post("https://644d6096cfdddac970a3783e.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  }



  const onClickRemoveCart = (id) => {
    axios.delete(`https://644d6096cfdddac970a3783e.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter((item) => item.id !== id))
  
  };

  const onClickBtnCart = () => {
    setCartOpened(!cartOpened)
  }

  const onChangeSerachInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToFavorite = (obj) => {
    debugger
    let f = favorites.filter(f => f.favorite.id === obj.id)
    if(favorites.find(f => f.favorite.id === obj.id)) {
      axios.delete(`https://644d6096cfdddac970a3783e.mockapi.io/cart/${f[0].id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== f[0].id));
    } else {
      axios
        .post("https://644d6096cfdddac970a3783e.mockapi.io/cart", {
          favorite: obj,
        })
        .then((res) => setFavorites((prev) => [...prev, res.data]));
    }
  }
console.log(favorites);
  return (
    <div className="wrapper clear">
      {/* Sidebar */}

      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickBtnCart={onClickBtnCart}
          onClickRemoveCart={onClickRemoveCart}
        />
      )}

      {/* Header */}

      <Header onClickBtnCart={onClickBtnCart} />

      {/* Content */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              addItemInCart={addItemInCart}
              setSearchValue={setSearchValue}
              onAddToFavorite={onAddToFavorite}
              onChangeSerachInput={onChangeSerachInput}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
