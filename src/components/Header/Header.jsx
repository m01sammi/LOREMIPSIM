import React, { useState } from 'react'
import styles from './Header.module.scss'
import logoPng from '../../assets/img/logo.png'
import VectorPng from '../../assets/img/Vector.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={ isOpen ? styles.header_open : styles.header_close}>
      <div className={styles.header__wrapper}>
        <h1>LOREMIPSIM<span>.NET</span></h1>
        <div className={ isOpen ? styles.header__menu : styles.header__menu_close} >
            <a href=''><p>БИЗНЕС</p></a>
            <a href=''><p>О НАС</p></a>
            <a href=''><p>ЦЕНЫ</p></a>
            <a href=''><p>ОФОРМИТЬ ЗАКАЗ</p></a>
            <img src={VectorPng} alt="vector" onClick={toggleMenu}/>
        </div>
      </div>
    </header>  
    )
}
