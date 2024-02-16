import React, { useState } from 'react'
import { Header } from '../../components/Header/Header'
import styles from './Main.module.scss'
import { Footer } from '../../components/Footer/Footer'
import searchPng from '../../assets/img/search.png'
import listPng from '../../assets/img/list.png'
import postPng from '../../assets/img/post.png'
import percentPng from '../../assets/img/percent.png'
import banknotePng from '../../assets/img/banknote.png'
import filePng from '../../assets/img/file.png'

export const Main = () => {

    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value, 10));
    }

    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      // Далее можно обработать выбранный файл по вашим потребностям
  
      // Получение имени выбранного файла
      const fileName = selectedFile ? selectedFile.name : '';
      setSelectedFileName(fileName);
    };

  return (
    <>
        <Header />
        <section className={styles.banner}>
            <div className={styles.banner__wrapper}>
                <h1><span>LOREM IPSUM</span> DOLOR SIT<br/> AMETCONSECTETUR <span>ADIPISICING</span></h1>
                <div className={styles.banner__info}>
                    <h3>At vero eos et accusamus et iusto odio dignissimos ducimus!</h3>
                    <p> - Totam rem aperiam eaque ipsa</p>
                    <p> - Sit voluptatem accusantium doloremque laudantium</p>
                    <p> - Sed ut perspiciatis, unde omnis iste natus error</p>
                </div>
                <div className={styles.banner__btn}>
                    <button className={styles.btn__order}><p>ЗАКАЗАТЬ</p></button>
                    <button className={styles.btn__about}><p>ПОДРОБНЕЕ</p></button>
                </div>
            </div>
        </section>
        <div className={styles.order}>
            <div className={styles.order__wrapper}>
                <div className={styles.order__text}>
                    <h1>ОФОРМЛЕНИЕ <span>ЗАКАЗА</span></h1>
                    <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                </div>
                <div className={styles.order__way}>
                    <div className={styles.order__way__block}>
                        <img src={searchPng} alt="img"/>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={styles.order__way__block}>
                        <img src={percentPng} alt="img"/>
                        <p>Сonsecteturadipiscing elit</p>
                    </div>
                    <div className={styles.order__way__block}>
                        <img src={listPng} alt="img"/>
                        <p>Sed do eiusmod tempor</p>
                    </div>
                    <div className={styles.order__way__block}>
                        <img src={postPng} alt="img"/>
                        <p>Esse cillum dolore eu fugiat</p>
                    </div>
                    <div className={styles.order__way__block}>
                        <img src={banknotePng} alt="img"/>
                        <p>Excepteur sint occaecat<br/> cupidatat non proident</p>
                    </div>
                </div>
                <div className={styles.ellipse_line}>
                    <div className={styles.ellipse_block}>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                    </div>
                    <div className={styles.ellipse_block}>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                    </div>
                    <div className={styles.ellipse_block}>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                    </div>
                    <div className={styles.ellipse_block}>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse}></div>
                    </div>
                </div>
                <div className={styles.order__form}>
                    <div className={styles.order__form__inputs__block1}>
                    <select class="select" name="language">
                        <option selected disabled hidden>Выберите тип системы</option>
                        <option value="1">Sed ut perspiciatis</option>
                        <option value="2">Nemo enim ipsam</option>
                        <option value="3">Et harum quidem</option>
                        <option value="4">Temporibus autem</option>
                        <option value="5">Itaque earum rerum</option>
                    </select>
                        <input name ="email" id='email' type="text" placeholder="Ваш e-mail"/>
                        <input name ="name" id='name' type="text" placeholder="Ваше имя"/>
                    </div>
                    <div className={styles.order__form__inputs__block2}>
                       <div className={styles.range__block}>
                            <div className={styles.range__block__text}>
                                <p>Sed ut perspiciatis, unde omnis iste natus</p>
                                <p>{rangeValue}%</p>
                            </div>
                            <input type="range" id='range'  min="0" max="100" name="range" step="1" value={rangeValue} onChange={handleRangeChange}/>
                        </div>
                        <div className={styles.fileInputContainer}>
                            <input
                                type="file"
                                id="fileInput"
                                className={styles.fileInput}
                                onChange={handleFileChange}
                            />
                            <label htmlFor="fileInput"><img src={filePng} alt="file" />{selectedFileName || 'ПРИКРЕПИТЬ ФАЙЛ'}</label>
                        </div>
                        {/* <button className={styles.file_btn}>
                            <p>ПРИКРЕПИТЬ ФАЙЛ</p>
                        </button> */}
                    </div>
                </div>
                <button className={styles.order__btn__confirm}><p>ОТПРАВИТЬ</p></button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

