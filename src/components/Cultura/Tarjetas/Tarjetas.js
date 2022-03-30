import ListaTarjeta from "./ListaTarjetas";
import {getAsyncInfoTarjetas} from "../Data";
import Loading from "../../Recursos/img/loading.gif"
import { useEffect, useReducer } from "react";

//el reducer tiene un estado y una accion, en funcion de la accion que quieras retorna un nuevo estado

const initialTarjetasState = {
  loading: false,
  error: false,
  tarjetas: []
}

const tarjetasReducer = (state, action)  => {
  switch (action.type){
    case "TARJETAS_FETCH_INIT":
      return {
        loading: true,
        error: false,
        tarjetas: []
      }
    case "TARJETAS_FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        tarjetas: action.payload
      }
    case "TARJETAS_FETCH_ERROR":
      return {
        loading: false,
        error: true,
        tarjetas: []
      }
  
  }
}

export default function Tarjetas(){

  const [tarjetasState, dispatchTarjetas] = useReducer(
      tarjetasReducer,
      initialTarjetasState
  );

  const {tarjetas, loading, error} = tarjetasState;
  
  useEffect(()=>{

    dispatchTarjetas({
      type: "TARJETAS_FETCH_INIT",
    })
    getAsyncInfoTarjetas().then(result => {
      dispatchTarjetas({
        type: "TARJETAS_FETCH_SUCCESS",
        payload: result.data.tarjetas
      })
  
    }).catch(err => dispatchTarjetas({
      type: "STORIES_FETCH_ERROR"
    }));
  },[]);

    if(error){
      return <p>Error!</p> 
    }
    console.log(loading);
    return loading ? <img src={Loading}></img> : 
        
          tarjetas.map(function(props){
            return (
              
              <div className="cultura-museo" key={props.id}>
                <div className="cultura-museo__lado cultura-museo__lado--delante">
                  <div className={"cultura-museo__imagen cultura-museo__imagen--"+props.id}>
                    &nbsp;
                  </div>
                  <h4 className="cultura-museo__heading">
                    <span className={"cultura-museo__heading-span cultura-museo__heading-span--"+props.id}>{props.titulo}</span>
                  </h4>
                </div>  
                <div className={"cultura-museo__lado cultura-museo__lado--detras cultura-museo__lado--detras-"+props.id}>
                  <div className="cultura-museo__detalles">
                    <ListaTarjeta listaTarjeta={props}/>
                  </div>
                </div>
              </div>  
                        
            )
          })
  }