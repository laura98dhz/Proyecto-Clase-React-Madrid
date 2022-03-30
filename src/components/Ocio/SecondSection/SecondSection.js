import "./SecondSection.scss";
import { useEffect, useState } from "react";
import loading from '../../Recursos/img/loading.gif';

const url = "http://localhost:3001/parks";

export default function SecondSection() {
  const [parks, setPark] = useState([]);
  const[type,setType]=useState("atracciones");
  const [haveData,setHaveData]=useState(false);


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setPark(result);
          setHaveData(true);
        }, 2000);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);


  return (
    <>
      <section className="second__section" id="second__section">
        <h3 className="second__section--title">¡LLENATE DE ADRENALINA!</h3>
        {haveData ? 
        <div className="park-part">
          {parks.map((park) => { 
              if(type==park.type){
            return (
              <div key={park.text1}>
                <h2 style={{transition:"all 1s"}}>{park.name}</h2>
                <p className="park-part--text1" style={{transition:"all 1s"}}>{park.text1}</p>
                <br/>
                <p className="park-part--text2" style={{transition:"all 1s", marginBottom:"3rem"}}>{park.text2}</p>
              </div>
            );
}})}

          <ul className="park-part--icons">
            {parks.map((park) => {
              return (
                <li key={park.id} style={
                    park.type==type ? { WebkitBackgroundClip:"text", backgroundClip: "text",WebkitTextFillColor: "transparent",
                      transition:"all 1s", transform: "scale(0.8)", filter: "brightness(0.20)" } : {}
                } onClick={(event)=> {
                    setType(park.type);
                    
                    }}>
                  <img className="park-part--icons--styleIcon" src={park.icon} alt=""></img>
                  <br />
                  <p className="park-part--icons--name">{park.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
: <div style={{width:"100%",position:"absolute", textAlign:"center"}}><img style={{width:"70px", margin:"0 auto", position:"relative" }} src={loading} alt=""/></div>}
      </section>
    </>
  );
}
