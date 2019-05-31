import React from 'react';
import '../../styles/topmenu.css';

//test Data Array
const data = [
  {name: 'Главная', title: 'Главная страница', id: 'mainPage'},
  {name: 'Обо мне', title: 'Моя биография', id: 'aboutPage'},
  {name: 'Навыки', title: 'Мои навыки', id: 'skillsPage'},
  {name: 'Блог', title: 'Мой микроблог', id: 'blogPage'},
  {name: 'Проекты', title: 'Мои проекты', id: 'projectsPage'},
  {name: 'Соц. Сети', title: 'Я в соц сетях', id: 'socialsPage'},
  {name: 'Связь', title: 'Связь со мной', id: 'callPage'}
];
const menuBtn = data.map((comp, key) => <div key={key} className="menu_btn" id={comp.id} def-title={comp.title}>{comp.name}</div>);

const menuLeft = <div className="menuBlock"></div>
const menuCenter = <div className="menuBlock menuCenter">{menuBtn}</div>
const menuRight = <div className="menuBlock menuRight"></div>

class HeadMenu extends React.Component {
  render() {
    return <div className="topmenu">
      {menuLeft}
      {menuCenter}
      {menuRight}
    </div>
  }
}

export default HeadMenu;
