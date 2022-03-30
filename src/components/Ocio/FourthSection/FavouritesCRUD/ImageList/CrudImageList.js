import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { Button } from "@material-ui/core";
import "./CrudImageList.scss";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles((theme) => ({
  boton: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    borderRadius: "3px",
    fontSize: "16px",
    border: "0",
    color: "white",
    height: "48px",
    padding: " 0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
    marginBottom: "6rem",
  },

  text: {
    fontSize: "10rem",
  },
}));

export default function CrudImageList({
  images,
  abrirCerrarModalInsertar,
  selectImage,
}) {
  const styles = useStyles();
  return (
    <div className="favourites__list">
      <Button
        className={styles.boton}
        onClick={() => abrirCerrarModalInsertar()}
      >
        Inserta Nueva Ruta
      </Button>
      <ImageList
        className="favourites__list--component"
        sx={{ width: "80rem", height: "50rem" }}
        cols={2}
      >
        <ImageListItem style={{ position: "sticky" }} key="Subheader" cols={2}>
          <ListSubheader
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "17px",
              letterSpacing: "1rem",
              fontWeight: "800",
            }}
            component="div"
          >
            <p className="favourites__list--component--title">
              MIS RUTAS FAVORITAS
            </p>
            <StarIcon
              style={{
                height: "3rem",
                width: "3rem",
                fill: "yellow",
                marginTop: "0.6rem",
              }}
            ></StarIcon>
          </ListSubheader>
        </ImageListItem>
        {JSON.stringify(images) !== "[]" &&
          images.map(function (image) {
            return (
              <ImageListItem key={image.id}>
                <img
                  src={image.image}
                  srcSet={image.image}
                  alt={image.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={image.name}
                  className="favourites__list--bar"
                  actionIcon={
                    <>
                      <IconButton
                        style={{ height: "8rem" }}
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        onClick={function (event) {
                          selectImage(image, "Editar");
                        }}
                      >
                        <EditIcon style={{ height: "3rem", width: "3rem" }} />
                      </IconButton>
                      <IconButton
                        style={{ height: "8rem" }}
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        onClick={function (event) {
                          selectImage(image, "Eliminar");
                        }}
                      >
                        <DeleteIcon style={{ height: "3rem", width: "3rem" }} />
                      </IconButton>
                    </>
                  }
                ></ImageListItemBar>
              </ImageListItem>
            );
          })}
      </ImageList>
    </div>
  );
}
