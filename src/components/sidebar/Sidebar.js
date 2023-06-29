import React from 'react';

import {BsChevronRight} from 'react-icons/bs'
import './Sidebar.css';

const icons = [
  { icons: 'Телевизоры, фото-видео и аудио'},
  { icons: 'Elektronika'},
  { icons: 'Ноутбуки, принтеры, компьютеры'},
  { icons: 'Смартфоны, телефоны, гаджеты, аксессуары'},
  { icons: 'Бытовая техника' },
  { icons: 'Все для кухни'},
  { icons: 'Спорт товары'},
  { icons: 'Красота и здоровье'},
  { icons: 'Товары из за рубежа'},
  { icons: 'Автотовары'},
  { icons: 'Все для офиса, дома и сада'},
  { icons: 'Игрушки и товары для детей'},
  { icons: 'Одежда и обувь'},
  { icons: 'Книги'},
  { icons: 'Мебель'},
  { icons: 'Для геймеров' },
  { icons: 'Все для ремонта и строительства'},
  { icons: 'Канцелярские товары'},
  { icons: 'Электротранспорт'},
  { icons: 'Подарки и сувениры'},
  { icons: 'Умный дом'},
  { icons: 'Выгодные предложения'}
];

function Sidebar({ show, setShow }) {
  return (
    <>
      {show ? <div className='sidebar__shadow' onClick={() => setShow(false)}></div> : <></>}
      <div className={`sidebar ${show ? 'show' : ''}`}>
        <div className="sidebar__content">
          {icons.map((icon, index) => (
            <div className="sidebar__item" key={index}>
              <span>{icon.icons}</span>
              <p><BsChevronRight/></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
