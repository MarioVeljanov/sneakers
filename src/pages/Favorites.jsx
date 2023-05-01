import React from "react";
import { Card } from "../components/Card/Card";

export const Favorites = ({items, onAddToFavorite}) => {
    
  console.log({...items.favorite});
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
            <h1 className="">
                {/* {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"} */}
            </h1>
            <div className="search-block d-flex">
                <img src="/icons/search.svg" alt="search" />
                <input
                // value={searchValue}
                placeholder="Поиск..."
                // onChange={onChangeSerachInput}
                />
                {/* {searchValue && (
                <img
                    className="clearInput"
                    src="/icons/btn-remove.svg"
                    alt="search"
                    onClick={() => setSearchValue("")}
                />
                )} */}
            </div>
            </div>

            <div className="d-flex flex-wrap">
                {items
                .map((c, i) => (
                <Card
                    key={i}
                    // {...c.favorite}
                    title={c.favorite.title}
                    price={c.favorite.price}
                    imgUrl={c.favorite.imgUrl}
                    id={c.favorite.id}
                    cardId={c.id}
                    isFavorite={true}
                    // addItemInCart={addItemInCart}
                    onFavorite={onAddToFavorite}
                />
                )
                )}
            </div>
        </div>

    )
}