import {getAsyncInitialFotos} from "../Data";
import { useEffect, useRef, useReducer } from "react";
import Loading from "../../Recursos/img/loading.gif"

const initialCarruselState = {
  loading: false,
  error: false,
  botonPulsado: false,
  translateX: 0,
  activo: false,
  fotos: []
}

const carruselReducer = (state, action) => {
    switch (action.type){
        case "CARRUSEL_FETCH_INIT":
          return {
            loading: true,
            error: false,
            botonPulsado: false,
            translateX: 0,
            activo: false,
            fotos: []
          }
        case "CARRUSEL_FETCH_SUCCESS":
          return {
            loading: false,
            error: false,
            botonPulsado: false,
            translateX: 0,
            activo: false,
            fotos: action.payload
          }
        case "CARRUSEL_FETCH_ERROR":
          return {
            loading: false,
            error: true,
            botonPulsado: false,
            translateX: 0,
            activo: false,
            fotos: []
          }
        case "CARRUSEL_FETCH_TRANSITION_RIGHT":
            return {
                loading: false,
                error: false,
                botonPulsado: false,
                translateX: state.translateX+32.5,
                activo: true,
                fotos: state.fotos
            }
        case "CARRUSEL_FETCH_TRANSITION_LEFT":
            return {
                loading: false,
                error: false,
                botonPulsado: true,
                translateX: state.translateX-32.5,
                activo: true,
                fotos: state.fotos
            }
        case "CARRUSEL_FETCH_TRANSITION_BTN_FALSE":
            return {
                loading: false,
                error: false,
                botonPulsado: false,
                translateX: 0,
                activo: false,
                fotos: state.fotos
            }
        case "CARRUSEL_FETCH_ROTATE_LEFT":
            return {
                loading: false,
                error: false,
                botonPulsado: false,
                translateX: 0,
                activo: false,
                fotos: state.fotos
            }
        case "CARRUSEL_FETCH_ROTATE":
            return {
                loading: false,
                error: false,
                botonPulsado: false,
                translateX: 0,
                activo: false,
                fotos: action.payload
            }
      }
}

export default function Carrusel() {

    const [carruselState, dispatchCarrusel] = useReducer(
        carruselReducer,
        initialCarruselState
    );

    const {fotos, loading, error, botonPulsado, translateX, activo} = carruselState;

    
    const slider = useRef(null);
    
    useEffect(()=>{
        
        dispatchCarrusel({
            type: "CARRUSEL_FETCH_INIT"
        })

        
        getAsyncInitialFotos().then(result => {
            dispatchCarrusel({
                type: "CARRUSEL_FETCH_SUCCESS",
                payload:result.data.carrusel
            })
 
        }).catch(err => dispatchCarrusel({
            type: "CARRUSEL_FETCH_ERROR"
        }))
        
    },[]);

    function CarruselBtn(botonPulsado){
        
        slider.current.style.transition = '2s ease all';     

        if(botonPulsado=="izq"){
            
            slider.current.style.transform = `translateX(${translateX+32.5}%)`; 

            dispatchCarrusel({
                type: "CARRUSEL_FETCH_TRANSITION_RIGHT"
            })

        }else{
            
            slider.current.style.transform = `translateX(${translateX-32.5}%)`; 

            dispatchCarrusel({
                type: "CARRUSEL_FETCH_TRANSITION_LEFT"
            })
        }

    }

    function CarruselTransitionEnd(){
        
        slider.current.style.transition = 'none'; 
        
        if(botonPulsado){
            slider.current.style.transform = `translateX(${translateX+32.5}%)`; 
        }else{
            slider.current.style.transform = `translateX(${translateX-32.5}%)`;
        }

        dispatchCarrusel({
            type:"CARRUSEL_FETCH_TRANSITION_BTN_FALSE"
        })
        rotate(botonPulsado);
          
    }

    function rotate(isLeft = false) { 
            
        if (isLeft) {
            dispatchCarrusel({
                type:"CARRUSEL_FETCH_ROTATE",
                payload: [...fotos.slice(1, fotos.length), fotos[0]]
            })

        } else {
            dispatchCarrusel({
                type:"CARRUSEL_FETCH_ROTATE",
                payload: [fotos[fotos.length-1], ...fotos.slice(0, fotos.length-1)]
            })
        }
    }

    useEffect(() => {
        const id = setTimeout(() => {
            slider.current.style.transition = '2s ease all';     
            slider.current.style.transform = `translateX(${translateX-32.5}%)`; 
            dispatchCarrusel({
                type: "CARRUSEL_FETCH_TRANSITION_LEFT"
            })
            
        },5000)
        return () => {
            clearTimeout(id)
        } }, [fotos]);
    
        if(error){
            return <p>Error!</p> 
        }

        return loading ? <img src={Loading} className="loading--carrusel"></img> :
            <>
            <button className="boton_carrusel boton_carrusel--izq" disabled={activo} onClick={()=>CarruselBtn("izq")}>&#60;</button>
            <button className="boton_carrusel boton_carrusel--drch" disabled={activo} onClick={()=>CarruselBtn("drch")}>&#62;</button>
                <div className="carrusel--container_exterior">
                    <div className="opiniones_carrusel--container" style={{transform: "translateX(0%)"}} ref={slider} onTransitionEnd={()=>CarruselTransitionEnd()}>
                            {
                                fotos.slice(0,5).map((props)=>
                                        
                                    <div className="opiniones_contenido" key={props.id}>

                                        <div className="imagenes--container">
                                            <img src={props.nombre} className="carrusel_imagen"></img>
                                        </div>
                                        <div className="opinion_texto">
                                            <h3>{props.texto}</h3>
                                            <p>{props.opinion}</p>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </>
        
}