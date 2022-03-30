import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

export default function Menu({ setShowLogin, profile }) {
  const location = useLocation();

  function handleClick(event) {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
    setShowLogin(true);
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
            <li className="menu__item--logo" onClick={handleClick}>
              {profile !== null ? (
                <img
                  style={{
                    maxWidth: "50px",
                    maxHeight: "55px",
                    borderRadius: "30px",
                  }}
                  src={profile}
                  alt=""
                />
              ) : (
                <i className="material-icons menu__item--logo-img">
                  account_circle
                </i>
              )}
            </li>
        <li
          className={
            location.pathname === "/" ? "menu__item index" : "menu__item"
          }
        >
          <Link
            to="/"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Index</p>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/transportes"
              ? " menu__item transportes"
              : "menu__item"
          }
        >
          <Link
            to="/transportes"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Transportes</p>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/ocio" ? " menu__item ocio" : "menu__item"
          }
        >
          <Link
            to="/ocio"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Ocio</p>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/gastronomia"
              ? " menu__item gastronomia"
              : "menu__item"
          }
        >
          <Link
            to="/gastronomia"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Gastronomia</p>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/cultura"
              ? " menu__item cultura"
              : "menu__item"
          }
        >
          <Link
            to="/cultura"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Cultura</p>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/visita"
              ? " menu__item visita"
              : "menu__item"
          }
        >
          <Link
            to="/visita"
            onClick={function () {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Organiza tu visita</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
