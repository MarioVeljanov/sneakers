import React from "react";
import { Card } from "../components/Card/Card";

export const Home = ({
    items,
    searchValue,
    addItemInCart,
    setSearchValue,
    onAddToFavorite,
    onChangeSerachInput
}) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
            <h1 className="">
                {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
            </h1>
            <div className="search-block d-flex">
                <img src="/icons/search.svg" alt="search" />
                <input
                value={searchValue}
                placeholder="Поиск..."
                onChange={onChangeSerachInput}
                />
                {searchValue && (
                <img
                    className="clearInput"
                    src="/icons/btn-remove.svg"
                    alt="search"
                    onClick={() => setSearchValue("")}
                />
                )}
            </div>
            </div>

            <div className="d-flex flex-wrap">
            {items
                .filter((item) => {
                return item.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((c, i) => (
                <Card
                    key={i}
                    {...c}
                    addItemInCart={addItemInCart}
                    onFavorite={onAddToFavorite}
                />
                )
                )}
            </div>
        </div>

    )
}