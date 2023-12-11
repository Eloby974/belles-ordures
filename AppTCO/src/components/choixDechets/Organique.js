import ChoixImg from './organique/ChoixImg';
import Calendrier from './organique/Calendrier';
import '../../styles/choixDechets/Organique.css';

function Organique () {
    return (
        <div className='organique'>
            <ChoixImg />
            <Calendrier />
        </div>
    )
}

export default Organique;