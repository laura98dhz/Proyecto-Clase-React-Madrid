import { useEffect, useState } from "react"; 

export default function RelojAnalogico() {
    const day = new Date();
    const segundos = day.getSeconds();
    const minutos = day.getMinutes();
    const horas = day.getHours();
    const hours = day.toLocaleTimeString('es-EN');
            
    const [hour, setHour] = useState(hours);
    
    useEffect(() => {
        const id =  setInterval(() => {
            const day = new Date();
            const hours = day.toLocaleTimeString('es-EN');
            setHour(hours);        
        },1000)
        return () => clearInterval(id);
        }
    , [])
    const gradosSegundos = segundos*6;
    const gradosMinutos = minutos*6;
    const gradosHoras = horas*15;

    return(
        
        <div className="relojAnalogico">
            <span className="aguja aguja--segundos" style={{transform: 'rotate('+gradosSegundos+'deg)'}}></span >
            <span className="aguja aguja--minutos" style={{transform: 'rotate('+gradosMinutos+'deg)'}}></span >
            <span className="aguja aguja--horas" style={{transform: 'rotate('+gradosHoras+'deg)'}}></span >
            <span className="relojCirculo"></span>
        </div>
        
    )
}