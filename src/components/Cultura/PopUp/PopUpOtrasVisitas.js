
import Carrito from "../../Recursos/img/carrito.png"
import Loading from "../../Recursos/img/loading.gif"

import { getAsyncPopUp } from "../Data";

import { useEffect, useState, useRef, useReducer } from "react";


const initialPopUpState = {
    loading: false,
    error: false,
    valor: 0,
    añadido: null,
    eliminado: null,
    lista: [],
    cuentaAtras: null,
    total: 0,
    controladorContador: true,
    popUp: []
}

const popUpReducer = (state, action)  => {
    switch (action.type){
        
        case "POPUP_FETCH_INIT":
        return {
            loading: true,
            error: false,
            valor: 0,
            añadido: null,
            eliminado: null,
            lista: [],
            cuentaAtras: null,
            total: 0,
            controladorContador: true,
            popUp: []
        }

        case "POPUP_FETCH_SUCCESS":
            return {
            loading: false,
            error: false,
            valor: 0,
            añadido: null,
            eliminado: null,
            lista: [],
            cuentaAtras: null,
            total: 0,
            controladorContador: true,
            popUp: action.payload
        }

        case "POPUP_FETCH_ERROR":
        return {
            loading: false,
            error: true,
            valor: 0,
            añadido: null,
            eliminado: null,
            lista: [],
            cuentaAtras: null,
            total: 0,
            controladorContador: true,
            popUp: []
        }

        case "POPUP_FETCH_DATE_CUENTA_ATRAS":
            return {
                ...state,
                cuentaAtras: action.payload,
                controladorContador: !state.controladorContador
        }

        case "POPUP_FETCH_DATE_CONTOLADOR_CONTADOR":
            return {
                ...state,
                controladorContador: !state.controladorContador,
        }

        case "POPUP_FETCH_AÑADIR":
            return {
            ...state,
            valor: action.valor,
            añadido: action.añadido,
        }

        case "POPUP_FETCH_LISTA_AÑADIDO":
            return {
                ...state,
                lista: action.lista,
                total: action.total,
        }

        case "POPUP_FETCH_ELIMINADO":
            return {
                ...state,
                valor: action.valor,
                eliminado: action.eliminado,
        }

        case "POPUP_FETCH_PRECIO_TOTAL":
            return {
                ...state,
                eliminado: action.eliminado,
                total: action.total,
        }

        case "POPUP_FETCH_LISTA_NUEVA":
            return {
                ...state,
                eliminado: action.eliminado,
                lista: action.lista,
        }
        
    }
}

export default function PopUp() {
    
    const [popUpState, dispatchPopUp] = useReducer(
            popUpReducer,
            initialPopUpState
        );
        
    const {popUp, loading, error, valor, lista, cuentaAtras, total, controladorContador} = popUpState;
    
    const contador = useRef(null);
    
    const desplegable = useRef(null);
    
    let titulo;
    let lista2 = lista;
        
    useEffect(()=>{
        
        dispatchPopUp({
            type: "POPUP_FETCH_INIT",
        })
        getAsyncPopUp().then(result => {
            dispatchPopUp({
                type: "POPUP_FETCH_SUCCESS",
                payload: result.data.popUp
            })
            
        }).catch(err => dispatchPopUp({
            type: "POPUP_FETCH_ERROR"
        }));

    },[]);
        
    useEffect(()=>{
        
        const id = setTimeout(()=>{
            
            const day = Date.now();
            const dayFinally = new Date("Februery 7, 2022 23:00:00");
            
            const diferenciaSegundos = Math.trunc((dayFinally.getTime()-day)/1000%60);
            const diferenciaMinutos = Math.trunc((dayFinally.getTime()-day)/1000/60%60);
            const diferenciaHoras = Math.trunc((dayFinally.getTime()-day)/1000/60/60);
    
            const diferenciaTotal = diferenciaHoras+":"+diferenciaMinutos+":"+diferenciaSegundos;
            
            dispatchPopUp({
                type: "POPUP_FETCH_DATE_CUENTA_ATRAS",
                payload: diferenciaTotal
            })
            
            // if(!controladorContador){
            //     contador.current.style.color = "black";
            // }else{               
            //     contador.current.style.color = "red";
            // }
    
        },1000)
    
        return ()=> clearTimeout(id);
    
    },[controladorContador])
        
    if(error){
        return <p>Error!</p> 
    }

    function handleOnClick(boton){
       
        switch (boton){

        case "segovia":
            dispatchPopUp({
                type: "POPUP_FETCH_AÑADIR",
                añadido:boton,
                valor: valor+1
            })
        
            break;

        case "toledo":
            dispatchPopUp({
                type: "POPUP_FETCH_AÑADIR",
                añadido:boton,
                valor: valor+1
            })
        
            break;

        case "autobus":
            dispatchPopUp({
                type: "POPUP_FETCH_AÑADIR",
                añadido:boton,
                valor: valor+1
            })
        
            break;

        case "escorial":
            dispatchPopUp({
                type: "POPUP_FETCH_AÑADIR",
                añadido:boton,
                valor: valor+1
            })
        
            break;
        }

        popUp.forEach(element => {
            if(element.boton===boton){
                
                titulo = element.titulo;

                lista2.push(titulo);

                dispatchPopUp({
                    type: "POPUP_FETCH_LISTA_AÑADIDO",
                    total:total+element.precioOferta,
                    lista: lista2 
                })
            }
            
        });
        
    }

    function handleOnMouseEnter(){
        desplegable.current.style.display = "inline";
    }

    function handleOnMouseOut(){
        desplegable.current.style.transition = "5s ease all";
        desplegable.current.style.display = "none";
    }

    function handleOnClickDelete(elemento){
        
        switch (elemento){
            case "Misterios y leyendas del Madrid de los Austrias":
                
                dispatchPopUp({
                    type: "POPUP_FETCH_ELIMINADO",
                    eliminado:elemento,
                    valor: valor-1 
                })
                       
                break;

            case "Fantasmas y casas encantadas de Madrid":
                
                dispatchPopUp({
                    type: "POPUP_FETCH_ELIMINADO",
                    eliminado:elemento,
                    valor: valor-1 
                })
                       
                break;

            case "El Madrid de Benito Pérez Galdós":

                dispatchPopUp({
                    type: "POPUP_FETCH_ELIMINADO",
                    eliminado:elemento,
                    valor: valor-1 
                })
                       
                break;

            case "Excursion Al Escorial":

                dispatchPopUp({
                    type: "POPUP_FETCH_ELIMINADO",
                    eliminado:elemento,
                    valor: valor-1 
                })
                       
                break;
            }
    
    
            lista.forEach(element => {
                if(element===elemento){
                   popUp.filter(function(item){
                        let precio;
                        if(item.titulo===elemento){
                            precio = item.precioOferta;

                            dispatchPopUp({
                                type: "POPUP_FETCH_PRECIO_TOTAL",
                                total:total-precio
                            })
                            
                            return precio;
                        }
                    })
                    lista2=lista.filter((item)=>item!==elemento);
                    dispatchPopUp({
                        type: "POPUP_FETCH_LISTA_NUEVA",
                        lista: lista2
                    })
                }
                
            });
    }

    return loading ? <img src={Loading} className="loading--popup-otrasVisitas"></img> : 
        <>  <div className="cuenta-atras" ref={contador}>
                Quedan {cuentaAtras} h
            </div>
            <div className="container_carrito" onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()}>
                <img src={Carrito}  onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()}></img>
                <span>{valor}</span>
                    
                    <div style={{display:"none"}} className="desplegable" ref={desplegable}>
                                                        
                            <ul>
                            {  
                                    lista.map(function(elemento){
                                        return(
                                            <li key={elemento} onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()}>{elemento}<span onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()} onClick={()=>handleOnClickDelete(elemento)} className="lista--eliminar">&times;</span></li>
                                        )
                                    })
                            }      
                                <li onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()}>TOTAL: <span className="total" onMouseEnter={()=>handleOnMouseEnter()} onMouseOut={()=>handleOnMouseOut()}>{total} €</span></li>         
                            </ul>
                    </div>                
            </div>
        {
            popUp.map(function(elemento) {
                return(
                    
                    <div className="popUp_container--individual--otras-visitas" key={elemento.id}>
                        <img src={elemento.nombre} ></img>
                        <div className="popUp-info">
                            <h3>{elemento.titulo}</h3>
                            <div className="precio">
                                <p className="precio-anterior">{elemento.precioAnterior + "€"}</p>
                                <p className="precio-descuento">{"-"+Math.round(100-(elemento.precioOferta*100/elemento.precioAnterior))+"%"}</p>
                                <p className="precio-oferta">{elemento.precioOferta + "€"}</p>
                            </div>
                            <button className="boton-añadir" onClick={()=>handleOnClick(elemento.boton)}>Añadir</button>                            
                        </div>
                    </div>
                )
            })
        }
           
        </>
}
