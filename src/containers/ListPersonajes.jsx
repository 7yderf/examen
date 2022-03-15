import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../context/AppContext';
import Personaje from '@components/Personaje';
import {useGetpersonajes} from '../hooks/useGetpersonajes.js';
import '../styles/listPersonajes.scss';

const API = 'https://swapi.dev/api/people/';

const ListPersonajes = () => {
	const {state} = useContext(AppContext)
	const [dataScroll, setDataScroll] = useState(1)
	const [initialData, setInitialData] = useState([])
	const [loading, setLoading] =useState(false)
	
	useEffect ( () => {
		useGetpersonajes(API, dataScroll, initialData.personaje)
		.then ( success => {
			setInitialData([...initialData, ...success])
		})
		.then (success => setLoading(true))
	},[dataScroll])
	
	window.onscroll = function(){
		if(
			window.innerHeight + document.documentElement.scrollTop
			=== document.documentElement.offsetHeight
		){
			setDataScroll(dataScroll+1)
		}
	}

	return (
		<section className="main-container">
			
			{!loading ? <div >...Cargando</div> : ""}
			<div className="listPersonajes">
			{initialData.map((personaje, index) => (
				state.favorito.some(item => (item.name === personaje.name))
				?<Personaje  personaje={personaje} key={personaje.name} index={index} add={true}/>
				:<Personaje  personaje={personaje} key={personaje.name} index={index}/>
			))
			}
			
				
			</div>
		</section>
	);
}

export default ListPersonajes;
