import { getAsyncPopUpDos } from "../Data"
import Loading from "../../Recursos/img/loading.gif"
import { useEffect, useReducer } from "react";



const initialPopUpState = {
    loading: false,
    error: false,
    popUp: []
  }
  
  const popUpReducer = (state, action)  => {
    switch (action.type){
      case "POPUP_FETCH_INIT":
        return {
          loading: true,
          error: false,
          popUp: []
        }
      case "POPUP_FETCH_SUCCESS":
        return {
          loading: false,
          error: false,
          popUp: action.payload
        }
      case "POPUP_FETCH_ERROR":
        return {
          loading: false,
          error: true,
          popUpDos: []
        }
    
    }
  }


export default function PopUpParques() {

    const [popUpState, dispatchPopUp] = useReducer(
        popUpReducer,
        initialPopUpState
    );
  
    const {popUp, loading, error} = popUpState;
    
    useEffect(()=>{
  
      dispatchPopUp({
        type: "POPUP_FETCH_INIT",
      })
      getAsyncPopUpDos().then(result => {
        dispatchPopUp({
          type: "POPUP_FETCH_SUCCESS",
          payload: result.data.popUp
        })
    
      }).catch(err => dispatchPopUp({
        type: "POPUP_FETCH_ERROR"
      }));
    },[]);
  
    if(error){
    return <p>Error!</p> 
    }


    return loading ? <img src={Loading} className="loading--popUp-parques"></img> :
        <>

        {
            popUp.map(function(elemento) {
                return(
                    
                    <div className="popUp_container--individual" key={elemento.id}>
                        <img src={elemento.nombre}></img>
                        <h3>{elemento.titulo}</h3>
                    </div>
                    
                )
            })
        }
           
        </>
    
}
