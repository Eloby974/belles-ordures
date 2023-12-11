import ChoixImg from "./vegetaux/ChoixImg";
import "../../styles/choixDechets/Vegetaux.css"
import Calendrier from "./vegetaux/Calendrier";

function Vegetaux () {
    return (
        <div className='vegetaux'>
            <ChoixImg />
            <Calendrier />
        </div>
    )
}

export default Vegetaux;