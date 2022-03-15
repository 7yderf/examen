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
			
			
			<div className="listPersonajes">
				
					<Personaje/>
			
				
			</div>
		</section>
	);
}

export default ListPersonajes;
