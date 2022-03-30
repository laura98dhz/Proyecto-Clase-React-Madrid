export default function  ListaTarjeta(props) {
    const infoTarjetas = props.listaTarjeta
    return(
        <ul>
            <li key={infoTarjetas.dirección}>Dirección:<br></br>{infoTarjetas.dirección}</li>
            <li key={infoTarjetas.metro}>Metro: <br></br>{infoTarjetas.metro}</li>
            <li key={infoTarjetas.entradaGeneral}>Entrada General:<br></br>{infoTarjetas.entradaGeneral}</li>
            <li key={infoTarjetas.horario}>Horario:<br></br>{infoTarjetas.horario}</li>
        </ul>                
    )
}