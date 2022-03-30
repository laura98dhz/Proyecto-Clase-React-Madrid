import { useEffect, useState } from 'react';
import './VisitaForm.scss';
import capitalize from '../../../utils/capitalize';
import { CSSTransition } from 'react-transition-group';

export default function VisitaForm(props) {
    const dispatch = props.dispatch; // Función dispatch del reducer
    const category = capitalize(props.category.toLowerCase()); // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const alteredPlan = props.alteredPlan; // Estado; contendrá los datos modificados del nuevo plan a insertar
    const setAlteredPlan = props.setAlteredPlan; // Función actualizadora del estado newPlan
    const createPlan = props.createPlan; // Función que ejecuta la inserción en el JSON de datos
    const date = props.date; // Estado; contiene la fecha a mostrar en el input de tipo date
    const setDate = props.setDate; // Función actualizadora del estado de la fecha
    const today = props.today; // Contiene la fecha actual

    useEffect(() => { // Para que la fecha actual se guarde automáticamente al cargar la página
        if(alteredPlan.day === "") {
            setAlteredPlan({...alteredPlan, day: today})
        }
        // eslint-disable-next-line
    }, [alteredPlan])

    const [showCovers, setShowCovers] = useState(false) // Controla si el div de las coberturas del Submit debe aparecer o no (react-transition-group)
    const [transitionTimeout, setTransitionTimeout] = useState(500) // Controla el tiempo que dura la animación total del div de las coberturas (react-transition-group)

    useEffect(() => { 
        // Si el objeto "alteredPlan" está lleno (todas sus propiedades tienen valor), comienza la animación de revelar el botón de Submit
        /* Transición: "transition: opacity ease-in 0s 0.7s". Deja 0.7s de delay para permitir que las coberturas aparezcan, y revela el botón 
            (el botón se irá viendo a medida que la animación que mueve las coberturas lo revele) */
        let isPlanFilled = Object.values(alteredPlan).every(item => item !== "")
        const button = document.getElementById("submitButton");
        
        if(!isPlanFilled) {
            setShowCovers(false)
                button.style.opacity = "0"
                button.style.cursor = "default"
                button.disabled = true;
        } else {
            setShowCovers(true)
            button.style.opacity = "1"
            button.style.cursor = "pointer"
            button.disabled = false;
        }
    }, [alteredPlan])

    function revealedCovers() { // Disparada con el componente de CSSTransition (react-transition-group)
        // Animación que separa gradualmente las dos mitades del div de coberturas del Submit 
        // Se inicia una vez que termine la animación en la que aparecen gradualmente las coberturas
        // "transition: transform 0.7s ease-in-out;"
        const coverR = document.getElementById("coverR");
        const coverL = document.getElementById("coverL");

        coverR.style.transform = "translate(100%)";
        coverL.style.transform = "translate(-100%)";
    }

    function closingCovers() { // Disparada con el componente de CSSTransition (react-transition-group)
        // Animación que junta gradualmente las dos mitades del div de coberturas del Submit 
        // Se inicia nada más quede "no-lleno" el objeto "alteredPlan" (ver el efecto más arriba)
        // "transition: transform 0.7s ease-in-out;"
        const coverR = document.getElementById("coverR");
        const coverL = document.getElementById("coverL");
        
        coverR.style.transform = "translate(0)";
        coverL.style.transform = "translate(0)";
    }
    
    
    return (
        <form className="visita__form" onSubmit={e => e.preventDefault()}>
            <div className="visita__form--inputs">
                {/* /////////////////////// INPUT */}
                <div className='visita__form--inputs--input'>
                    <input className="visita__form--inputs__date" value={date} type="date" onChange={event => {
                        if (today > event.target.value) {
                            alert("No puedes seleccionar una fecha anterior a la de hoy");
                            setDate(today);
                        } else {
                            setAlteredPlan({...alteredPlan, day: event.target.value});
                            setDate(event.target.value);
                        }
                    }} required />
                </div>
                

                {/* /////////////////////// SELECT CATEGORY */}
                <div className='visita__form--inputs--input'>
                    <select className="visita__form--inputs__dropdown" value={category} onChange={event =>  {
                            dispatch({type:event.target.value.toUpperCase()});
                            setAlteredPlan({...alteredPlan, category: event.target.value})
                    }}>
                        <option style={{display:"none"}}>-- Categoría --</option>
                        <option>Cultura</option>
                        <option>Gastronomia</option>
                        <option>Ocio</option>
                    </select>
                </div>

                {/* /////////////////////// SELECT ITEM */}
                <div className='visita__form--inputs--input'>
                    <select className="visita__form--inputs__dropdown" defaultValue={"--- Elige ---"} onChange={event => {
                        setAlteredPlan({...alteredPlan, option: event.target.value})
                    }}>
                        <option style={{display:"none"}}>-- Qué hacer --</option>
                        {dropdown.map(element => {
                            return <option key={element}>{element}</option>
                        })}
                    </select>
                </div>
            </div>
            {/* /////////////////////// SUBMIT */}
            <div className="visita__form--submit">
                <button id='submitButton' className="visita__form--submitButton" onClick={() => {
                    createPlan();
                }} >
                    Añadir al planning
                </button> 
                    <CSSTransition
                    /* La animación para mostrar el botón Submit tiene 2 partes: una manejada por este componente y descrita en 
                        VisitaForm.scss (en las clases .covers), en la que dos coberturas del mismo color que el fondo aparecen y 
                        empiezan a crecer, tapando el Submit. La otra, una vez acabe la primera, es que estas dos coberturas se
                        separan, revelando el Submit debajo (controlada con las funciones revealedCovers y closingCovers).
                        Cuando el estado "showCovers" sea verdadero, se inicia la animación, disparando la animación y los eventos
                        de entrada (onEntered -> ocurre cuando el elemento ha terminado de aparecer). Cuando sea falso, se inicia
                        la "salida" de este elemento, disparando los eventos de salida (onExit -> cuando se inicia la salida, y 
                        onExited -> cuando la salida ha terminado), y provocando la misma animación pero al revés: las coberturas
                        se juntan, y luego desaparecen */
                        in={showCovers}
                        timeout={transitionTimeout}
                        classNames="covers"
                        mountOnEnter
                        unmountOnExit
                        onEntered={() => {
                            setTransitionTimeout(1400)
                            revealedCovers()
                        }}
                        onExit={() => closingCovers()}
                        onExited={() => setTransitionTimeout(500)}
                        
                    >
                        <div className="visita__form--submit--covers">
                                <div className="visita__form--submit--covers--L" id="coverL">&nbsp;</div>
                                <div className="visita__form--submit--covers--R" id='coverR'>&nbsp;</div>
                        </div>
                    </CSSTransition>
            </div>
        </form>
    )
}