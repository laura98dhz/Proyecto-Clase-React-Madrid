import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CrudImageList from "./ImageList/CrudImageList";
import "./FavouritesCrud.scss";

const url = "http://localhost:3001/favourites";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

export default function FavouritesCrud() {
  const styles = useStyles();
  const [favourites, setFavourites] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [favouriteSelected, setFavouriteSelected] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFavouriteSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFavourites = async () => {
    await axios
      .get(url)
      .then((response) => {
        setFavourites(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPost = async () => {
    await axios
      .post(url, favouriteSelected)
      .then((response) => {
        setFavourites(favourites.concat(response.data));
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async () => {
    await axios
      .put(url + "/" + favouriteSelected.id, favouriteSelected)
      .then((response) => {
        var newFavourite = favourites;
        newFavourite.map((favourite) => {
          if (favourite.id === favouriteSelected.id) {
            favourite.name = favouriteSelected.favourite;
            favourite.text = favouriteSelected.text;
            favourite.image = favouriteSelected.image;
          }
        });
        setFavourites(newFavourite);
        getFavourites();
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete = async () => {
    await axios
      .delete(url + "/" + favouriteSelected.id)
      .then((response) => {
        setFavourites(
          favourites.filter(
            (favourite) => favourite.id !== favouriteSelected.id
          )
        );
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectImage = (favourite, caso) => {
    setFavouriteSelected(favourite);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    getFavourites();
  }, []);

  function putImage(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFavouriteSelected((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
  }

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nueva Ruta</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre"
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => putImage(event.target.files[0])}
      ></input>
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar </h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre"
        name="name"
        onChange={handleChange}
        value={(favouriteSelected && favouriteSelected.name) || ""}
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => putImage(event.target.files[0])}
      ></input>
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar la ruta{" "}
        <b>{favouriteSelected && favouriteSelected.name}</b>?{" "}
      </p>
      <div align="right">
        <Button
          className="styleButton"
          color="secondary"
          onClick={() => peticionDelete()}
        >
          Sí
        </Button>
        <Button
          className="styleButton"
          onClick={() => abrirCerrarModalEliminar()}
        >
          No
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <CrudImageList
        images={favourites}
        abrirCerrarModalInsertar={abrirCerrarModalInsertar}
        selectImage={selectImage}
      />
      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>
      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </>
  );
}
