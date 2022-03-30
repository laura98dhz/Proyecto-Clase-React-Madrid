import { useEffect, useState } from "react";
import axios from "axios";
import md5 from "js-md5";
import "./Users.scss";
import buttonCerrar from "../Recursos/img/cerrar.png";
import Loading from "../Loading/Loading";

const url = "http://localhost:3001/users";

export default function Users({
  setProfile,
  setIsLogin,
  isLogin,
  setShowLogin,
}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    img: null,
  });
  const [areUsers, setAreUsers] = useState(false);
  const [ourUsers, setOurUsers] = useState([]);
  const [needRegister, setNeedRegister] = useState(true);

  const imageHandler = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setForm({ ...form, img: reader.result });
    };
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function logOut() {
    setIsLogin(false);
    localStorage.removeItem("username");
    localStorage.removeItem("img");
    setShowLogin(false);
    setProfile(null);
    window.onscroll = function () {};
  }

  async function seeUsers() {
    setAreUsers(false);
    await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          setOurUsers(response.map((usersn) => usersn.username));
          setAreUsers(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function iniciarSesion() {
    await axios
      .get(
        url +
          "?" +
          "username=" +
          form.username +
          "&password=" +
          md5(form.password)
      )
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          localStorage.setItem("username", respuesta.username);
          setProfile(respuesta.img);
          localStorage.setItem("img", respuesta.img);
          setShowLogin(false);
          setIsLogin(true);
          alert(`Estamos encantados de verte por aquí ${respuesta.username}`);
          window.onscroll = function () {};
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleRegis() {
    await seeUsers();
  }

  useEffect(() => {
    async function register() {
      let post = {
        username: form.username,
        password: md5(form.password),
        img: form.img,
      };
      if (form.username !== "" && form.password !== "" && form.img !== null) {
        await axios
          .post(url, post)
          .then((response) => {
            iniciarSesion();
            setShowLogin(false);
            window.onscroll = function () {};
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Necesitas introducir los datos");
      }
    }
    if (areUsers) {
      if (ourUsers.find((user) => user === form.username)) {
        alert("El usuario introducido ya existe");
      } else {
        register();
      }
    } else {
      <Loading />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areUsers]);

  return (
    <div className="container">
      <div className="container--popup">
        <img
          className="container--popup-cruz"
          src={buttonCerrar}
          onClick={() => {
            setShowLogin(false);
            window.onscroll = function () {};
          }}
          alt=""
        />
        <div className="container--popup--form">
          {!isLogin ? (
            <>
              <h2 className="container--popup--form-title">¡Bienvenido!</h2>
              <br />
              <input
                type="text"
                className="container--popup--form-data icono-placeholder"
                name="username"
                onChange={handleChange}
                placeholder="&nbsp; &#xf007; Usuario"
              ></input>
              <br />
              <br />
              <input
                type="password"
                className="container--popup--form-data "
                name="password"
                onChange={handleChange}
                placeholder="&nbsp; &#xf084; Contraseña"
              />
              {needRegister ? (
                <>
                  <input
                    type="file"
                    name="img-upload"
                    id="input"
                    accept="image/*"
                    onChange={(e) => imageHandler(e.target.files[0])}
                  ></input>
                  <br />
                  <br />
                  <label htmlFor="input" className="photo">
                    <i className="material-icons">photo</i>
                    Elige una foto...
                  </label>
                </>
              ) : (
                <></>
              )}
              <br />
              <br />
              <div className="btn--popup">
                {needRegister ? (
                  <>
                    <button
                      className="btn--popup-registro"
                      onClick={handleRegis}
                    >
                      Registrarse
                    </button>
                    <br />
                    <br />
                    <button
                      className="btn--popup-registro"
                      onClick={() => setNeedRegister(false)}
                    >
                      Ya Tengo Cuenta
                    </button>
                  </>
                ) : (
                  <button className="btn--popup-login" onClick={iniciarSesion}>
                    Iniciar Sesión
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <h2 className="container--popup--form-title">
                ¿Quieres cerrar la sesión?
              </h2>
              <div className="btn--popup">
                <button className="btn--popup-registro" onClick={logOut}>
                  Cerrar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
