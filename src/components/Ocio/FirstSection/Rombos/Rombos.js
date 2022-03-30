import "./Rombos.scss";
import { useEffect, useState } from "react";
import Rombo from "./Rombo/Rombo";


const forms =[ "-rombo", "-circle","-triangle", "-square"];
var contador=0;

export default function Rombos() {

  const [form,setForm] =useState(forms[0]);

  useEffect(() => {
  const changeRombos =  setTimeout(() =>{
      contador==3 ? contador=0 : contador++;
      setForm(forms[contador]);
  },3000);
  
    return () => {
      clearTimeout(changeRombos);

    }
  },[form]);
  

  return (
      <div className="rombos">
        <Rombo link={"https://source.unsplash.com/random/600x600?cinema"} polygon={form}/>
        <Rombo link={"https://source.unsplash.com/random/600x600?nature"} polygon={form}/>
        <Rombo link={"https://source.unsplash.com/random/600x600?park"} polygon={form}/>
        <Rombo link={"https://source.unsplash.com/random/600x600?disco"} polygon={form}/>
      </div>
  );
}
