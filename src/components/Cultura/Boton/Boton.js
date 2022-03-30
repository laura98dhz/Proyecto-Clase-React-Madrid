export default function Boton(props) {
    const texto = props.boton;
    return(
        <a href={props.url} className={props.claseBoton + " button"} onClick={props.onClick}>{texto}</a>          
    )
}