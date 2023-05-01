import React from "react";
import s from './Header.module.scss'
import { NavLink } from "react-router-dom";

export const Header = ({onClickBtnCart}) => {
    return (
    <header className="d-flex justify-between align-center p-40 ">
        <NavLink to={'/'}>
          <div className="d-flex align-center">
          <img width="40px" height="40px" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </NavLink>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={onClickBtnCart}>
            <NavLink>
              <img width="18px" height="18px" src="/icons/card.svg" alt="basket"/>
              <span>1205 рyб.</span>
            </NavLink>
          </li>
          <li className="cu-p mr-30">
            <NavLink to={'/favorites'}>
              <img width="18px" height="18px" src="/icons/heart.svg" alt="favorite"/>
            </NavLink>
          </li>
          <li className="cu-p">
            <NavLink>
              <img width="18px" height="18px" src="/icons/user.svg" alt="profile"/>
            </NavLink>
          </li>
        </ul>
      </header>
    )
}