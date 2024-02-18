import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../Burger/BurgerMenu";

const Navbar = ({ header, items }) => {
  return (
	<div className={styles.main}>
		<nav className={styles.navbar}>
		<div>
			<BurgerMenu header={header} items={items} />
		</div>
		<h1>CV GENERATOR</h1>
		</nav>
		<div className={styles.cont}>
			<ul>
			{items.map((item) => (
				<li>
				<Link to={item.href} className={styles.link}>
					{item.value}
				</Link>
				</li>
			))}
			</ul>
		</div>
	</div>
  );
};

export default Navbar;
