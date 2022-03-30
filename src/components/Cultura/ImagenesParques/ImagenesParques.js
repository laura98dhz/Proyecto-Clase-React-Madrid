import { useEffect, useReducer } from "react/cjs/react.development"
import { getAsyncParquesColumna } from "../Data"

import Loading from "../../Recursos/img/loading.gif"

const initialParquesState = {
    loading: false,
    error: false,
    parquesColumna: [],
}


const parquesReducer = (state, action)  => {
    switch (action.type){
    case "PARQUES_FETCH_INIT":
        return {
            loading: true,
            error: false,
            parquesColumna: []
        }

    case "PARQUES_FETCH_SUCCESS":
        return {
            loading: false,
            error: false,
            parquesColumna: action.payload
        }  

    case "PARQUES_FETCH_ERROR":
        return {
            loading: false,
            error: true,
            parquesColumna: []
        }
    }
}

export default function ImagenParque() {

    const [parquesState, dispatchParques] = useReducer(
        parquesReducer,
        initialParquesState
    );

    const {parquesColumna, loading, error} = parquesState;

    useEffect(() => {

        dispatchParques({
            type: "PARQUES_FETCH_INIT",
        })
        getAsyncParquesColumna().then(result => {
            dispatchParques({
            
                type: "PARQUES_FETCH_SUCCESS",
                payload: result.data.parques
            
            })

        }).catch(err => dispatchParques({
            type: "PARQUES_FETCH_ERROR"
        }));

    },[]);

    if(error){
        return <p>Error!</p> 
    }

    return loading ? <img src={Loading} className="loading--parques"></img> : 
        <div className='cultura-parques__container'>
            <div className='cultura-parques_contenido'>
                <div className='parques_contenido__imagenes'>
                    {
                        parquesColumna.slice(0,4).map(function (props) {
                            return(
                                <div key={props.id}>
                                    <a key={props.id} href={props.url} ><img className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id} src={props.nombre} alt={props.texto}></img></a>
                                    <figcaption className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id + ' parques_contenido__imagenes--imagen--texto'}>{props.texto}</figcaption>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='cultura-parques_contenido'>
                <div className='parques_contenido__imagenes'>
                    {
                        parquesColumna.slice(4,8).map(function (props) {
                            return(
                                <div key={props.id}> 
                                    <a href={props.url} ><img className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id} src={props.nombre} alt={props.texto}></img></a>
                                    <figcaption className={'parques_contenido__imagenes--imagen parques_contenido__imagenes--imagen--' + props.id + ' parques_contenido__imagenes--imagen--texto'}>{props.texto}</figcaption>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
}