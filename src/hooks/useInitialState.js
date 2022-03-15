import { useState } from "react";

const initialState = {
    favorito: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addfavorito = (payload) => {

        if (state.favorito.length === 0) {
            setState({
                ...state,
                favorito: [...state.favorito, payload]
            });
        }
        else if (!state.favorito.some(item => (item.name === payload.name))) {

            setState({
                ...state,
                favorito: [...state.favorito, payload]
            });
        }
    };

    const removeFavorito = (payload) => {
        setState({
            ...state,
            favorito: [...state.favorito.filter(item => item.name != payload.name)]
        })
    }
    console.log("state", state)

    return {
        state,
        addfavorito,
        removeFavorito
    }
}
export default useInitialState;