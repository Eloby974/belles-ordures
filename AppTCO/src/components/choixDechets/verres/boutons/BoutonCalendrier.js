import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import '../../../../styles/choixDechets/verres/boutons/BoutonCalendrier.css';


function BoutonCalendrier({ onClick }) {
    return (
        <div className="boutonCalendrier" onClick={onClick}>
            <FontAwesomeIcon icon={faCalendarDays} className="fa-2x" />        
        </div>
    );
}


export default BoutonCalendrier;