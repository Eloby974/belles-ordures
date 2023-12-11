import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../../../../styles/choixDechets/autres/boutons/BoutonMap.css';



function BoutonMap({ onClick }) {
    return (
        <div className="boutonMap" onClick={onClick}>
            <FontAwesomeIcon icon={faLocationDot} className="fa-2x" />
        </div>
    );
}


export default BoutonMap;