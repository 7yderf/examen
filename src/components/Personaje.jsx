import React, {useContext} from 'react';
// import '@styles/Personaje.scss';
import AppContext from '../context/AppContext';





const Personaje = ({personaje, index}) => {
	const {addFavorito } = useContext(AppContext)
	const handleClick = item => {
		addFavorito(item)
	}

	return (
		<div className="Personaje">
			
			<div className="Personaje-info">
				<div>
					<p>{personaje.name}</p>
					<p>Altura</p>
					<p>Peso</p>
					<p>Fecha de nacimiento</p>
				</div>
				<button  onClick={() => handleClick(personaje)}> añadir favorito </button>
				
			</div>
		</div>
	);
}

export default Personaje;
