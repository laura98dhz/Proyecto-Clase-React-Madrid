import Slider from "infinite-react-carousel";
import "./Variety.scss";
import { useEffect, useState } from "react";
import loading from '../../../Recursos/img/loading.gif';

const url = "http://localhost:3001/themes";

const settings = {
  autoplay: true,
  dots: true,
};

export default function Variety() {
  const [themes, setThemes] = useState([]);
  const [haveData,setHaveData] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setThemes(result);
          setHaveData(true);
        }, 2000);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);




  return (
    <div className="slider__variety">
    {haveData ? 
      <Slider {...settings}>
        {themes.map((theme) => {
          return (
            <div key={theme.id}>
            <div className="slider__variety--each">
              <img
                src={theme.image}
                className="slider__variety--each-image"
                alt=""
              />
              </div>
              <div className="slider__variety--content">
                <h2>{theme.name}</h2>
                <p>{theme.text}</p>
                <span className="slider__variety--content--link">¡Descúbrelos!</span>
              </div>
              </div>
          );
        })}
        </Slider>
        : <div style={{width:"100%",position:"absolute", textAlign:"center"}}><img style={{width:"70px", margin:"0 auto", position:"relative" }} src={loading} alt=""/></div>}
        </div>
  );
}
