import { useEffect, useState } from "react";
import GetTarjetas from "./voucherServices";
import Form from "./Form/Form";
import Read from "./Read/Read";
import "./VoucherCrud.scss";
import { useOutletContext } from "react-router-dom";
import "../../Users/Users.scss";

export default function VoucherCrud() {
  const [showForm, setShowForm] = useState(false);
  const [forUpdate, setForUpdate] = useState({});
  const [user, setUser] = useState(localStorage.getItem("username") || null);

  const [isLogin, setShowLogin] = useOutletContext();

  const url = "http://localhost:3001/tarjetas";

  const [
    pageEndPointTransportes,
    setPageEndPointTransportes,
    doneTransportes,
    setDoneTransportes,
  ] = GetTarjetas(url);

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [isLogin]);

  return (
    <div className="voucher" id="voucher">
      {isLogin ? (
        <>
          <h1 className="voucher--h1">
            ¡Hola {user}! Estas son las tarjetas de tu familia
          </h1>
          {showForm ? (
            <Form
              url={url}
              forUpdate={forUpdate}
              setForUpdate={setForUpdate}
              setDoneTransportes={setDoneTransportes}
              user={user}
              setShowForm={setShowForm}
            />
          ) : (
            <Read
              loading={!doneTransportes}
              url={url}
              setDoneTransportes={setDoneTransportes}
              setShowForm={setShowForm}
              user={user}
              doneTransportes={doneTransportes}
              pageEndPointTransportes={pageEndPointTransportes}
              setForUpdate={setForUpdate}
              setPageEndPointTransportes={setPageEndPointTransportes}
              setShowLogin={setShowLogin}
            />
          )}
        </>
      ) : (
        <button
          className="btn--popup-login voucher--btn"
          onClick={() => setShowLogin(true)}
        >
          Por favor, pulse aqui para regístrase o iniciar sesión y así poder
          crear sus tarjetas
        </button>
      )}
    </div>
  );
}
