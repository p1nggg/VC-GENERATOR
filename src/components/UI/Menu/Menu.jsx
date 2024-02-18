import { React, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => {
        setActive(false);
        document.body.classList.remove("disable-scroll");
      }}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <Link
                to={item.href}
                className="link"
                onClick={() => {
                  setActive(false);
                  document.body.classList.remove("disable-scroll");
                }}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
