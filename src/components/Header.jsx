import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Header.scss';
import logo from "../assets/logos/logo.png"


const Header = () => {

	return (
		<nav>
			{/* <img src={menu} alt="menu" className="menu" /> */}
			<div className="navbar-left">
				<ul>
					<li>	<img src={logo} alt="logo" className="nav-logo" /></li>
					<li>
						<Link to="/">Inicio</Link>
					</li>

					<li>
						<Link to="/favoritos">Favoritos</Link>
					</li>

				</ul>
			</div>


		</nav>
	);
}

export default Header;
