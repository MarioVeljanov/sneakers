import React from "react";
import s from './Drawer.module.scss'

export const Drawer = ({items, onClickBtnCart, onClickRemoveCart}) => {
  let item = items.filter(i => !Object.keys(i).includes('favorite') && i)

  return (
    <div className="overlay">
        <div className="drawer">
          <div className="items">
            <h2 className="d-flex justify-between mb-30">
              Корзина <img className="cu-p" src="/icons/btn-remove.svg" onClick={onClickBtnCart}/>
            </h2>

            {item.length !== 0 ?
            item.map(i => 
                (<div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${i.imgUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20">
                    <p className="mb-5">{i.title}</p>
                    <b> {i.price} руб.</b>
                  </div>
                  <img
                    className="removeIcon"
                    src="/icons/btn-remove.svg"
                    alt="remove"
                    onClick={() => onClickRemoveCart(i.id, i.imgUrl)}
                  />
                </div>)
            
            ) :
            <div className="emptyCart text-center">
              <img src="/img/emptyCart.jpg" alt="empty"/>
              <h2>Корзина пустая</h2>
              <p className="mb-40">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button className="greenButton left" onClick={onClickBtnCart}>
                <img className="arrowLeft" src="/icons/arrow-left.svg" alt="arrow" /> 
                Вернуться назад 
              </button>
            </div>
            }

          </div>

          {item.length !== 0 && 
          <div className="cartTotalBlock">
            <ul>
              <li className="mb-20 ">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>

            <button className="greenButton">
              Оформить заказ <img src="/icons/arrow.svg" alt="arrow" />
            </button>
          </div>
          }
        </div>
    </div>
  )
}