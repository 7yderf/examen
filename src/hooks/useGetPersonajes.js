import { useState, useEffect} from "react";
import axios from 'axios';



const useGetpersonajes = (API) => {
    console.log("api", API)
    const [personaje, setPersonaje] = useState([]);
    const [loading, setLoading] = useState(true)

	useEffect (async ()=>{
		const response = await axios(API);
		setPersonaje(response.data.results);
        setLoading(false)
	}, []);
    return { personaje, loading };


}

export default useGetpersonajes;