import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Visita_tabla.scss';

export default function VisitaTabla(props) {
    const planning = props.planning; // Contiene cada fila a presentar (cada plan, recuperado del json)
    const dispatch = props.dispatch; // Función dispatch del reducer

    /* Como la estructura del json está hecha de forma diferente para cada categoría ([...].data.gastronomia.restaurantes.[...] para los restaurantes,
        [...].cultura.museos.[...] para los museos...), en el dispatch hace falta devolver tanto la categoría (cultura) como la propiedad del objeto (museos),
        por separado. Por eso, en vez de hacer el dispatch directamente en el onClick, se llama a la función "dispatchUpdate()", que recibe el elemento a
        modificar de la tabla, y en función de su categoría, se define el "índice" de esa categoría que va a almacenar los elementos a recuperar (los restaurantes,
        museos, etc) */
        // console.log(planning);
        
        // useEffect(() => {
        //     let planTable = document.getElementById("plan_table");
        //     if(planning.length === 0) {
        //         planTable.style.opacity = "0";
        //     } else {
        //         planTable.style.opacity = "1";
        //     }
        // }, [planning.length])

        function dispatchUpdate(row) {
        var categoryIndex = "";

        switch (row.category) {
            case "Gastronomia":
                categoryIndex = "restaurantes";
                break;
            case "Cultura":
                categoryIndex = "museos";
                break;
            case "Ocio":
                categoryIndex = "parques";
                break;
            default:
                categoryIndex = ""
        }

        dispatch({
            type: "UPDATE",
            payload: {
                day: row.day,
                category: row.category,
                option: row.option,
                id: row.id
            },
            categoryIndex: categoryIndex
        })
    }

    return (
        <div className="visita__content__table" id="plan_table">
            <table>
                <thead>
                    <tr>
                        <th className='visita__content__table--smallColumn'>Días</th>
                        <th className='visita__content__table--smallColumn'>Categoría</th>
                        <th className='visita__content__table--bigColumn'>Qué hacer</th>
                    </tr>
                </thead>
                    <TransitionGroup component="tbody">
                        {planning.length === 0 ? null : planning.map((row) => {
                            return (
                                <CSSTransition key={row.id} timeout={300} classNames="item">
                                    <tr key={row.id}>
                                        <td>{row.day}</td>
                                        <td>{row.category}</td>
                                        <td>{row.option}</td>
                                        <td className="visita__content__table--buttons">
                                            <div className='buttonContainer'>
                                                <button className="visita__content__table--updateButton" onClick={() => {dispatchUpdate(row)}}>Modificar</button>
                                                <button className="visita__content__table--deleteButton" onClick={() => dispatch({
                                                    type: "DELETE",
                                                    payload: {
                                                        day: row.day,
                                                        category: row.category,
                                                        option: row.option,
                                                        id: row.id
                                                    },
                                                })}>Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                </CSSTransition>
                                )
                        })}
                    </TransitionGroup>
            </table>
        </div>
    )
}