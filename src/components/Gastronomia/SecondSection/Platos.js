import Popup from './Popup/Popup';
import './Platos.scss';
import { withLoading } from '../../Loading/withLoading';

function Platos({ title, dishes }) {
    return (
        <div className="platos">
            <div className="platos__titulo">
                <span className="platos__titulo--heading">{title}</span>
            </div>

            <Popup dishes={dishes.platos}/>
        </div>
    )
}

export default withLoading(Platos);