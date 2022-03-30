import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import { useEffect, useState } from "react";
import Select from "./Select/Select";
import "./Form.scss";
import axios from "axios";
import Bono from "./Bono/Bono";
import { Add } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Edit from "@mui/icons-material/Edit";

export default function Form({
  url,
  forUpdate,
  setForUpdate,
  setDoneTransportes,
  user,
  setShowForm,
}) {
  const [newVoucher, setNewVoucher] = useState({
    name: sessionStorage.getItem("tar-name") || "",
    surname: sessionStorage.getItem("tar-surname") || "",
    fileInput: null,
    type: "mensual",
    propertyOf: user,
  });

  useEffect(() => {
    JSON.stringify(forUpdate) !== "{}" &&
      setNewVoucher({ ...newVoucher, ...forUpdate });
    return () => {
      setNewVoucher({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forUpdate]);

  function handleName(e) {
    setNewVoucher({ ...newVoucher, name: e.target.value.toUpperCase() });
    sessionStorage.setItem("tar-name", e.target.value);
  }

  function handleSurName(e) {
    setNewVoucher({ ...newVoucher, surname: e.target.value.toUpperCase() });
    sessionStorage.setItem("tar-surname", e.target.value);
  }

  async function createNewVoucher() {
    newVoucher.name !== "" &&
    newVoucher.surname !== "" &&
    newVoucher.fileInput !== null &&
    newVoucher.propertyOf !== ""
      ? await axios
          .post(url, newVoucher)
          .then((response) => {
            alert("Tarjeta creada");
            sessionStorage.removeItem("tar-name");
            sessionStorage.removeItem("tar-surname");
            setShowForm(false);
            setDoneTransportes(false);
            setForUpdate({});
          })
          .catch((error) => {
            console.log(error);
          })
      : alert(
          "Inicia sesión e introduce todos tus datos antes de crear la tarjeta"
        );
  }

  async function editVoucher() {
    newVoucher.name !== "" &&
    newVoucher.surname !== "" &&
    newVoucher.fileInput !== null &&
    newVoucher.propertyOf !== ""
      ? await axios
          .put(url + "/" + newVoucher.id, newVoucher)
          .then((response) => {
            alert("Tarjeta actualizada");
            sessionStorage.removeItem("tar-name");
            sessionStorage.removeItem("tar-surname");
            setShowForm(false);
            setDoneTransportes(false);
            setNewVoucher(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      : alert(
          "Inicia sesión e introduce todos tus datos antes de crear la tarjeta"
        );
  }

  return (
    <div className="voucher__form-content">
      <div className="voucher__form-content--form">
        <form className="voucher__form-content--form-f">
          <LabelInput
            value={newVoucher.name}
            handle={handleName}
            text={"Nombre"}
          />
          <LabelInput
            value={newVoucher.surname}
            handle={handleSurName}
            text={"Apellidos"}
          />
          <Select newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          <InputImage newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          {JSON.stringify(forUpdate) === "{}" ? (
            <Button
              style={{
                fontSize: "14px",
                textAlign: "center",
              }}
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={createNewVoucher}
            >
              Crear nueva tarjeta
            </Button>
          ) : (
            <Button
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "green",
                backgroundColor: "white",
              }}
              variant="contained"
              color="inherit"
              startIcon={<Edit />}
              onClick={editVoucher}
            >
              Aceptar los cambios
            </Button>
          )}
        </form>
      </div>
      <Bono
        name={newVoucher.name}
        surname={newVoucher.surname}
        fileInput={newVoucher.fileInput}
      />
    </div>
  );
}
