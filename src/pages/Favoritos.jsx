import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Personaje from '../components/Personaje';



const Favoritos = () => {
	
	const { state, loading } = useContext(AppContext)
	const arrayFavoritos = true

	return (
		<section className="main-container">
			
			{loading ? <div >...Cargando</div> : ""}
			<div className="listPersonajes">
			{state.favorito.map((favorito, index) => (
					<Personaje  personaje={favorito} key={favorito.name} index={index} favorito={arrayFavoritos}/>
			))}
			
				
			</div>
		</section>
	);
}

export default Favoritos;
