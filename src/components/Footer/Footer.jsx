import React from 'react'
import styles from './Footer.module.scss'
import mailPng from '../../assets/img/mail.png'
import vkPng from '../../assets/img/vk.png'
import webPng from '../../assets/img/web.png'
import yandexPng from '../../assets/img/yandex.png'
import qiwiPng from '../../assets/img/qiwi.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
            <p>© 2018 «LoremIpsum.net» Все права защищены.</p>
            <div className={styles.footer__wallets}>
                <div className={styles.footer__frame}>
                    <img src={qiwiPng} alt="wallet" />
                    <p>Qiwi wallet</p>
                </div>
                <div className={styles.footer__frame}>
                    <img src={yandexPng} alt="wallet" />
                    <p>Yandex Money</p>
                </div>
                <div className={styles.footer__frame}>
                    <img src={webPng} alt="wallet" />
                    <p>Web Money</p>
                </div>
            </div>
            <div className={styles.footer__social}>
               <a href=''>
                <div className={styles.footer__frame}>
                        <img src={mailPng} alt="social" />
                        <p>info@ipsum228.com</p>
                    </div>
               </a>
               <a href=''>
                <div className={styles.footer__frame}>
                        <img src={vkPng} alt="social" />
                        <p>Мы вконтакте</p>
                    </div>
               </a>
            </div>
        </div>
    </footer>
  )
}
