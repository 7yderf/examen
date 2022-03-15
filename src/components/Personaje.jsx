import React, {useContext} from 'react';
// import '@styles/Personaje.scss';
import AppContext from '../context/AppContext';

const Personaje = ({personaje, index, favorito, add }) => {

	const {state, addFavorito, removeFavorito} = useContext(AppContext)
	const handleClick = item => {
		addFavorito(item)
	}

	const handleClickRemove = item => {
		removeFavorito(item)
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
				{
					favorito  
					? <button  onClick={() => handleClickRemove(personaje)}> quitar favorito </button>
				 : add 
				 ? <button > añadido </button> 
				 :<button  onClick={() => handleClick(personaje)}> añadir favorito </button>
				}
			</div>
		</div>
	);
}

export default Personaje;
