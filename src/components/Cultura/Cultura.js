import Boton from "./Boton/Boton";
import Tarjetas from "./Tarjetas/Tarjetas";
import TitulosSecundarios  from "./TituloSecundario/TitulosSecundarios";
import ImagenParque from "./ImagenesParques/ImagenesParques";
import ImagenOtrasVisitas from "./ImagenesOtrasVisitas/ImagenesOtrasVisitas";
import Carrusel from "./Carrusel/Carrusel";
import PopUp from "./PopUp/PopUp";
import "./sass/main.scss"
import { useState } from "react";

export default function Cultura() {

  const [noVisibility, setNoVisibility] = useState(true);
  const [section, setSection] = useState(null);

    function handleOnClick(sectionClick){
      if(sectionClick=="otrasVisitas"){
        setSection("otrasVisitas");
      }else{
        setSection("parques");
      }
      if(noVisibility){
        setNoVisibility(false);
      }else{
        setNoVisibility(true);
      }
    }

   return(
     
    <div className="body__cultura">
      
      <main>  
        
        <section className="museos">
          <div className="museos--text-box">
            <TitulosSecundarios clase="museos_heading--primary" tituloSecundario="Museos Que Visitar"/>
          </div>
          <div className="cultura-museo__container">
            <Tarjetas />
          </div>
          <Boton boton="Entradas Museos" claseBoton="museos--button" url="https:ww.museosenmadrid.com/entradas-museos-madrid.html"/>
        </section>
        
        <section className="parques">
          <div className="parques--text-box">
            <TitulosSecundarios clase="parques_heading--primary" tituloSecundario="Parques Que Visitar" />
          </div>
          <ImagenParque/>
          <Boton boton={"Rutas Organizadas"} claseBoton="parques--button" onClick={()=>handleOnClick("parques")}/>
        </section>
        
        <section className="cultura-otras_visitas">
          <div className="cultura-otras_visitas--text-box">
            <TitulosSecundarios clase="cultura-otras_visitas_heading--primary" tituloSecundario={"Otras Visitas Obligatorias"} />
          </div>
          <ImagenOtrasVisitas/>
          <Boton boton={"Ofertas Tours De Madrid"} claseBoton="cultura-otras_visitas--button" onClick={()=>handleOnClick("otrasVisitas")}/>
        </section>         
        
        <PopUp section={section} estado={noVisibility}/>

        <section className="opiniones">
          <div className="opiniones--text-box">
            <TitulosSecundarios clase="opiniones_heading--primary" tituloSecundario="Opiniones" />
          </div>
          <Carrusel/>
        </section>
      </main> 

    </div>
  )
}




