import { useEffect, useReducer } from "react";

import {getAsyncOtrasVisitas} from "../Data";

import Loading from "../../Recursos/img/loading.gif"
import PalacioReal from '../../Recursos/img/PalacioReal.jpg';
import Matadero from '../../Recursos/img/matadero.jpg';
import EstacionFantasmaDeChamberi from '../../Recursos/img/EstacionFantasmaChamberi.jpg';
import PuertaDeAlcala from '../../Recursos/img/PuertaAlcala.jpg';
import TeatroReal from '../../Recursos/img/TeatroReal.jpg';
import CatedralDeLaAlmudena from '../../Recursos/img/CatedralAlmudena.jpg';
import CuatroTorres from '../../Recursos/img/CuatroTorres.jpg';
import PlazaDeEspaña from '../../Recursos/img/PlazaEspaña.jpg';
import PlazaMayor from '../../Recursos/img/PlazaMayor.jpg';


const initialOtrasVisitasState = {
    loading: false,
    error: false,
    otrasVisitas: []
}


const tarjetasReducer = (state, action)  => {
    switch (action.type){
      case "OTRAS_VISITAS_FETCH_INIT":
        return {
          loading: true,
          error: false,
          otrasVisitas: []
        }
      case "OTRAS_VISITAS_FETCH_SUCCESS":
        return {
          loading: false,
          error: false,
          otrasVisitas: action.payload
        }
      case "OTRAS_VISITAS_FETCH_ERROR":
        return {
          loading: false,
          error: true,
          otrasVisitas: []
        }
    }
}


export default function ImagenOtrasVisitas() {

    const [tarjetasState, dispatchOtrasVisitas] = useReducer(
        tarjetasReducer,
        initialOtrasVisitasState
    );

    const {otrasVisitas, loading, error} = tarjetasState;

    useEffect(()=>{
        dispatchOtrasVisitas({
            type: "OTRAS_VISITAS_FETCH_INIT"
        })

        getAsyncOtrasVisitas().then(result => {
            dispatchOtrasVisitas({
                type: "OTRAS_VISITAS_FETCH_SUCCESS",
                payload: result.data.otrasVisitas
            })
        
        }).catch(err => dispatchOtrasVisitas({
            type: "OTRAS_VISITAS_FETCH_ERROR"
        }));
      },[]);
    
    if(error){
        return <p>Error!</p> 
    }

    return loading ? <img src={Loading}></img> :
        
        <>
            <div className="cultura-otras_visitas__container">    
            {
                otrasVisitas.slice(0,3).map(function (props) {
                    return(                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>        
                    )
                })
            }
            </div>
            <div className="cultura-otras_visitas__container">    
            {
                otrasVisitas.slice(3,6).map(function (props) {
                    return(                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>                    
                    )
                })
            }
            </div>
            
            <div className="cultura-otras_visitas__container">    
            {
                otrasVisitas.slice(6,9).map(function (props) {
                    return(
                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>                    
                    )
                })
            }
            </div>
        </>
       
}