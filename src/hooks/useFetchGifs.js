import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Hook Personalizado
export const useFetchGifs = (category)=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {      
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]); // Solo se ejecuta getGifs cuando el componente se renderiza por primera vez o cambia el valor de category
           
    return state;
}