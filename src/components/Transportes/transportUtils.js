import { useState, useEffect, createContext } from "react";

export function GetTransportes(url) {
  const [pageEndPointTransportes, setPageEndPointTransportes] = useState([]);
  const [doneTransportes, setDoneTransportes] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setPageEndPointTransportes(result);
          setDoneTransportes(true);
        }, 1500);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [url]);
  return [pageEndPointTransportes, doneTransportes];
}

export const TransportContext = createContext();
