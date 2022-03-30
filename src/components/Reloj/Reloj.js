import "./_reloj.scss";
import { useEffect, useState } from "react"; 

export default function Reloj() {
    const day = new Date();
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
    

    return(
        <div className="reloj">{hour}</div>
    )
}