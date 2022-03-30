import { useState,useEffect } from "react"
import PopUpParques from "./PopUpParques";
import PopUpOtrasVisitas from "./PopUpOtrasVisitas"

export default function PopUp(props){
    const [visibility, setVisibility] = useState(props.estado);
    
    
    useEffect(()=>{
        setVisibility(props.estado);
    },[props.estado])

    
    function handleOnClick(){
        setVisibility(true);
    }

    function backOpacity(){
        if(visibility){
            return "none"
        }else{
            return "inline"
        }
    }
    return(
        <>
            <div className="fondoOpaco" style={{display:backOpacity()}}>
            </div>
            <div className="popUp_container" style={{display: visibility ? "none" : "inline"}}>
                <a className="popUp_boton--cierre" onClick={()=>handleOnClick()}>&times;</a>
                <div className={"popUp_contenido--"+props.section}>{props.section=="parques" ? <PopUpParques/> : <PopUpOtrasVisitas/> }</div>
            </div>
        </>
    )
}