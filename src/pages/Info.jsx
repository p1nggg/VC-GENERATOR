import React, { useState } from "react";
import "../styles/Info.css";
import Navbar from "../components/UI/Navbar/Navbar";
import Footer from "../components/UI/Footer/Footer";

function Info() {

const [style, setStyle] = useState("hided")
const change = () =>{
	if(style == "hided"){
		setStyle("blocked")
	}
	else{
		setStyle("hided")
	}
}
const items = [
  { href: "/vcgen", value: "Генератор" },
  { href: "/land", value: "Главная" },
  { href: "/info", value: "Информация" },
];

  return (
    <div className="Info">
      <Navbar header="Меню" items={items} />
      <div className="information">
        <h1>Основная информация</h1>
        <h3>Автор сайта: Ученик 10Б класса Асланян Тигран</h3>
        <h3 className="button" onClick={() => change()}>Как работает сайт</h3>
        <div className={style}>
          <h4>
            Сайт-генератор на React работает по принципу динамического
            заполнения, когда вы вводите информацию в поле - она отображается на
            макете резюме снизу и вы можете видеть как оно будет выглядеть,
            также можно добавлять опыт и образование.
          </h4>
          <h4>
            Когда все поля заполнены и вам нравится как выглядит резюме, вы
            можете его распечатать нажав на соответствующую кнопку.
          </h4>
          <h4>
            При нажатии кнопки "Reset" происходит сброс всей введённой
            информации.
          </h4>
        </div>
        <h4>
          При обнаружении багов писать на почту: aslanyantigran545@gmail.com
        </h4>
      </div>
      <Footer />
    </div>
  );
};


export default Info;
