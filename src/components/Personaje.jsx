import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/Personaje.scss';
import imageCard from "../assets/imagen/backImage.jpg"

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
					<p className='nombrePersonaje'>{personaje.name}</p>
					<p> Altura: {personaje.height}</p>
					<p>Peso: {personaje.mass}</p>
					<p>Cumpleaños: {personaje.birth_year}</p>
				</div>
				{
					favorito  
					? <button className='remove' onClick={() => handleClickRemove(personaje)}> Quitar favorito </button>
				 : add 
				 ? <button  className='inactivo'> Añadido </button> 
				 :<button  className='add' onClick={() => handleClick(personaje)}> Añadir favorito </button>
				}
			</div>
			<div className="cardImagen">
				<img src={imageCard} alt="" />
			</div>
			<div className="degradado">
			</div>
		</div>
	);
}

export default Personaje;
