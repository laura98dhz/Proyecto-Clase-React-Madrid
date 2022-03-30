import './UpdateForm.scss';
import capitalize from '../../../utils/capitalize';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function UpdateForm(props) {
    const isShown = props.isShown; // Indica si el componente se muestra
    const dispatch = props.dispatch; // Función dispatch del reducer
    const category = capitalize(props.category.toLowerCase()); // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const selectedPlan = props.selectedPlan // Contiene los datos del plan (fila de la tabla) seleccionado
    const alteredPlan = props.alteredPlan; // Estado; contendrá los nuevos datos modificados del plan seleccionado
    const setAlteredPlan = props.setAlteredPlan; // Función actualizadora del estado newPlan
    const updatePlan = props.updatePlan; // Función que ejecuta la actualización en el JSON de datos

    const [isUpdating, setIsUpdating] = useState(false)
    function updating() {
        /* Si se actualiza uno de los planes, se muestra un mensaje ("isUpdating" controla que sólo se
            muestre este mensaje), y se produce la actualización. Tras un breve período, se cierra la 
            ventana */
        setIsUpdating(true)
        updatePlan();
        setTimeout(() => {
            dispatch({type:"CLOSE_FORM"})
            setIsUpdating(false)
        }, 1200);
    }

    return (
        <CSSTransition
        in={isShown}
        timeout={600}
        classNames="update"
        mountOnEnter
        unmountOnExit
        >
            <div className="update">
                {!isUpdating ? 
                (
                    <div className="update__content">
                        <div className="update__form">
                            <span className="update__form__header">Modifca tu plan</span>
                            
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="update__form__inputs" >
                                        {/* /////////////////////// INPUT */}
                                        <div className='update__form__inputs--input'>
                                            <input className="update__form__inputs__date" type="date" defaultValue={selectedPlan.day} onChange={event =>{
                                                setAlteredPlan({...alteredPlan, day: event.target.value})
                                            }} required />
                                        </div>
                                            
                                        {/* /////////////////////// SELECT CATEGORY */}
                                        <div className='update__form__inputs--input'>
                                            <select className="update__form__inputs__dropdown" defaultValue={category} onChange={event => {
                                                dispatch({type:event.target.value.toUpperCase()});
                                                setAlteredPlan({...alteredPlan, category: event.target.value})
                                            }}>
                                                <option style={{display:"none"}}>--- Elige ---</option>
                                                <option>Cultura</option>
                                                <option>Gastronomia</option>
                                                <option>Ocio</option>
                                            </select>
                                        </div>
                                        
                                        {/* /////////////////////// SELECT ITEM */}
                                        <div className='update__form__inputs--input'>
                                            <select className="update__form__inputs__dropdown" defaultValue={selectedPlan.option} onChange={event => {
                                                setAlteredPlan({...alteredPlan, option: event.target.value})
                                            }}>
                                                <option style={{display:"none"}}>--- Elige ---</option>
                                                {dropdown.map(element => {
                                                    return <option key={element}>{element}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    {/* /////////////////////// BUTTONS */}
                                    <div className="update__form__buttons">
                                        <button onClick={() => {
                                            updating();
                                        }}>
                                            Actualizar
                                        </button> 
                                        <button className="update__close" onClick={() => {
                                            dispatch({type: "CLOSE_FORM"})
                                        }}>Cerrar</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                ) : (
                    <div className='update__content'>
                        <span className="update__form__header">Actualizando...</span>
                    </div>
                )}
            </div>
        </CSSTransition>
    )
}