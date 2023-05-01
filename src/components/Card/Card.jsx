import React, { useState } from "react";
import s from './Card.module.scss'

export const Card = ({title, price, imgUrl, addItemInCart, onFavorite, isFavorite = false, id, cardId}) => {

  const [isAdd, setIsAdd] = useState(false)
  const [favorite, setFavorite] = useState(isFavorite)
  const onClickHandler = () => {
    setIsAdd(!isAdd)
    addItemInCart({title, price, imgUrl})
  }
  const onFavoriteHandler = () => {
    debugger
    setFavorite(prev => !prev)
    onFavorite({title, price, imgUrl, id, cardId})
  }
  return (
    <div className={`${s.card} mb-40`}>
      <div className={s.favorite} onClick={onFavoriteHandler}>
        <img src={`/icons/btn-${!favorite ? 'un' : ''}like-svg.svg`} alt="like"/>
      </div>
      <img width={"133px"} height={"112px"} src={imgUrl} />
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        
        <img className={s.plus} src={`/icons/${!isAdd ? 'plus': 'cheked'}.svg`} onClick={onClickHandler}/>
        
      </div>
    </div>
  );
};
