export default function TitulosSecundarios(props) {
    const texto = props.tituloSecundario;
    return(
        <>
        <h2 className={props.clase}>{texto}</h2> 
        </>           
    )
}