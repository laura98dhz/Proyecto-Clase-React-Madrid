import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DeleteForm.scss';
export default function DeleteForm(props) {
    const isShown = props.isShown; // Indica si el componente se muestra
    const dispatch = props.dispatch; // Función dispatch del reducer
    const selectedPlan = props.selectedPlan // Contiene los datos del plan (fila de la tabla) seleccionado
    const deletePlan = props.deletePlan; // Función que ejecuta el borrado en el JSON de datos

    const [isDeleting, setIsDeleting] = useState(false)
    function deleting() {
        setIsDeleting(true)
        deletePlan(selectedPlan);
        setTimeout(() => {
            dispatch({type:"CLOSE_FORM"})
            setIsDeleting(false)
        }, 1500);
    }

    return (
        <CSSTransition
        in={isShown}
        timeout={600}
        classNames="delete"
        mountOnEnter
        unmountOnExit
        >
            <div className='delete'>
                {!isDeleting ? 
                    ( 
                        <div className='delete__content'>
                            <div className="delete__text">
                                <span className="delete__text--header">Estás a punto de borrar un plan</span>
                                <div className='delete__text--contents'>
                                    <span className='delete__text--contents--element'>{selectedPlan.day}</span>
                                    <span className='delete__text--contents--element'>{selectedPlan.category}</span>
                                    <span className='delete__text--contents--element'>{selectedPlan.option}</span>
                                </div>
                            </div>
                            
                            <div className='delete__buttons'>
                                <button className="delete__buttons--delete" onClick={() => {
                                    deleting();
                                }}>BORRAR</button>
                                <button className="delete__buttons--cancel" onClick={() => dispatch({type:"CLOSE_FORM"})}>Cancelar</button>
                            </div>
                        </div> 
                    ) : (
                        <div className='delete__content'>
                            <div className='delete__text'>
                                <span className="delete__text--header">Borrando...</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </CSSTransition>
    )
}