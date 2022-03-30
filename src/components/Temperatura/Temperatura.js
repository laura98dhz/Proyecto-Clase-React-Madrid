import { useState, useEffect } from "react";
import Loading from "../Recursos/img/loading.gif"
import "./_temperatura.scss";

const url= "http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=" + "12b3d35ed8697e92d8a1b42fc8aac557";

export default function Temperatura(){
    
    const [temperaturaApi, setTemperaturaApi] = useState({});
    const [datos, setDatos] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const id = setInterval(() => {
            
            fetch(url).then((result) =>{
                return result.json()

            }).then((result) => {

                setTemperaturaApi(result);
                setDatos(true);
                setLoading(false);

            }).catch((err) => {
                <p>ERROR</p>
            })

        }, 1000)

        return () => {
            clearInterval(id)
        }
    })

    function precipitacionesCastellano(precipitaciones){
        switch(precipitaciones){
            case "clear sky":
                return "Soleado";
            case "few clouds":
                return "Mayormente Soleado";
            case "scattered clouds":
                return "Nubes Dispersas";
            case "broken clouds":
                return "Nublado";
            case "shower rain":
                return "Aguacero";
            case "rain":
                return " Lluvia";  
            case "thunderstorm":
                return "Tormenta";
            case "snow":
                return "Nieve";
            case "mist":
                return "Bruma";   
        }
    }
    var temperatura = null;
    if(datos){
        temperatura ={
            ciudad: temperaturaApi.name,
            temperatura: Math.trunc((temperaturaApi.main.temp) - 273),
            precipitaciones: precipitacionesCastellano(temperaturaApi.weather[0]["description"]),
            icono: `https://openweathermap.org/img/wn/${temperaturaApi.weather[0]["icon"]}@2x.png`,
        }
    }
    return loading ?<img className="loading--temperatura" src={Loading}></img> :
        <div className="temperatura--container">
            <h2 className="temperatura--heading">{datos && temperatura !== null && temperatura.ciudad }</h2>
            <h2 className="temperatura--grados">{ datos && temperatura !== null && temperatura.temperatura}º</h2>
            <img src={datos && temperatura !== null && temperatura.icono || "loading"} className="temperatura--icono"></img>
            <h2 className="temperatura--precipitaciones">{datos && temperatura !== null && temperatura.precipitaciones}</h2>
        </div>
}