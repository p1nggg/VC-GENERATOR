import React from "react";
import Footer from "../components/UI/Footer/Footer";
import { Navbar } from "../components/UI/Navbar";
import "../styles/Landing.css"
import { Link } from "react-router-dom";

const items = [{href: "/vcgen", value: "Генератор"}, {href: "/land", value: "Главная"}, {href: "/info", value: "Информация"}]

const Landing = () => {
    return (
        <div className="Landing">
            <Navbar header="Меню" items={items}/>
            <div className="greeting">
                <h1>CV Generator</h1>
                <h2>Сайт-генератор для создания универсального резюме специалиста IT направленности</h2>
                <div className="start"><Link to="/vcgen" className="start__link">Начать</Link></div>
            </div>

            <Footer/>
        </div>
    )
}

export default Landing;
