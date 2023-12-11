import imgBenneCartons from '../../assets/typesPoubelles/emcombrants.png';
import '../../../styles/choixDechets/cartons/Calendrier.css';

function Calendrier() {
    return(
        <div className='calendrierCartons'>
            <h2>Cartons</h2>
            <p>Vous pouvez attendre la collecte ou déposer dans la déchetterie la plus proche</p>

            <div className='imgBenne'>
                <div>
                <img src={imgBenneCartons} alt='Benne Cartons' id='imgCartons' />
                </div>
                <div>
                    Appel calendrier
                </div>
            </div>
        </div>
    )
}

export default Calendrier;