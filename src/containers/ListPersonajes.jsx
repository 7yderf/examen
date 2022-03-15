import React from 'react';
import Personaje from '@components/Personaje';
import useGetpersonajes from '../hooks/useGetpersonajes';
// import '@styles/listPersonajes.scss';

const API = 'https://swapi.dev/api/people/';


const ListPersonajes = () => {
	
	const {personaje, loading} = useGetpersonajes(API)
	

	console.log("personaje", personaje)
	
	return (
		<section className="main-container">
			
			{loading ? <div >...Cargando</div> : ""}
			<div className="listPersonajes">
			{personaje.map((personaje, index) => (
					<Personaje  personaje={personaje} key={personaje.name} index={index}/>
			))}
			
				
			</div>
		</section>
	);
}

export default ListPersonajes;
