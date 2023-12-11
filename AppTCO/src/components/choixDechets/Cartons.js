import ChoixImg from "./cartons/ChoixImg";
import Calendrier from "./cartons/Calendrier";
import '../../styles/choixDechets/Cartons.css';


function Cartons() {
    return(
        <div className="cartons">
            <ChoixImg />
            <Calendrier />
        </div>
    )
}

export default Cartons;