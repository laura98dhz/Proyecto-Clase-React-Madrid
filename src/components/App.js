import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Users from "./Users/Users";

export default function App() {
  const [items, setItems] = useState({
    data: "", // Datos de las secciones Transportes, Ocio, Cultura y Gastronomía
    planning: "", // Datos de la sección Visitas
  });

  const [done, setDone] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("username") ? true : false
  );
  const [profile, setProfile] = useState(localStorage.getItem("img") || null);

  const pathname = useLocation().pathname; //obtengo la ruta acutal p.ejem("/transportes")
  // const url = `http://localhost:3001${pathname === "/" ? "/index" : pathname}`;   //le indico la ruta con el recurso a solicitar y en el caso de que pathname hubiera sido "/" (referido a index), a la url le paso /index
  const urlData = "http://localhost:3001/data"; // la URL del recurso (json) que se va a obtener
  const urlVisita = "http://localhost:3001/visita"; // La URL del recurso de "visita" (CRUD planning)
  
  /* Función para el CRUD de /visitas. Debe estar en App.js en vez de en Visitas.js, porque para ver en tiempo real
    los cambios producidos, se debe volver a cargar el json haciendo un nuevo "fetch()", lo cual se consigue modificando
    el estado "items", que guarda toda la información recogida del json */
  function alterPlan(alteredPlan, mode) {
    switch (mode) {
      case "create":
        setItems({
          ...items,
          planning: [...items.planning, alteredPlan]
        })
        break;
      case "update":
        setItems({
          ...items,
          planning: [...items.planning.map(plan => plan.id !== alteredPlan.id ? plan : alteredPlan)]
        })
        break;
      case "delete":
        setItems({
          ...items,
          planning: [...items.planning.filter(plan => plan.id !== alteredPlan.id)]
        })
        break;
      default:
        throw new Error("Error en CRUD");
    }
  }

  //Se corre este efecto cada vez que cambie la url (es decir, queramos solicitar otro recurso)
  useEffect(() => {
    Promise.all([ // Al hacer más de una solicitud fetch, hay que meterlas en una promesa para que se hagan a la vez
      fetch(urlData) // con fecth obtenemos el recurso de la URL indicada
        .then(res => res.json()), // si hemos conseguid obtenerlo devolvemos una promesa que se resuelve con el resultado como JSON
      fetch(urlVisita)
        .then(res => res.json())
    ]).then(result => {
      setItems({
        data: result[0],
        planning: result[1]
      });
      setDone(true);
    }).catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
  }, [urlData]);

  var pageEndPoint;
  if (done) {
    switch (pathname) {
      case "/":
        pageEndPoint = items.data.index;
        break;
      case "/gastronomia":
        pageEndPoint = items.data.gastronomia;
        break;
      case "/cultura":
        pageEndPoint = items.data.cultura;
        break;
      case "/visita":
        pageEndPoint = items;
        break;
    }
  }
  
  return (
    <div>
      {showLogin ? (
        <Users
          setProfile={setProfile}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          setShowLogin={setShowLogin}
        />
      ) : (
        <></>
      )}
      <Header />
      <Menu setShowLogin={setShowLogin} profile={profile} />
      <Outlet context={[isLogin, setShowLogin, done, pageEndPoint,alterPlan]} />
      <UpButton />
      <Footer />
    </div>
  );
}

