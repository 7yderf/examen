import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import '@styles/Header.scss';


const Header = () => {
	
	return (
		<nav>
			{/* <img src={menu} alt="menu" className="menu" /> */}
			<div className="navbar-left">
				{/* <img src={logo} alt="logo" className="nav-logo" /> */}
				<ul>
					<li>
					<Link to="/">About</Link>
					</li>
					<li>
					<Link to="/favoritos">About</Link>
					</li>
					
				</ul>
			</div>
			

		</nav>
	);
}

export default Header;
