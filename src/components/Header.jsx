import React, {useState, useContext} from 'react';
import '@styles/Header.scss';


const Header = () => {
	
	return (
		<nav>
			{/* <img src={menu} alt="menu" className="menu" /> */}
			<div className="navbar-left">
				{/* <img src={logo} alt="logo" className="nav-logo" /> */}
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/favoritos">Favoritos</a>
					</li>
					
				</ul>
			</div>
			

		</nav>
	);
}

export default Header;
