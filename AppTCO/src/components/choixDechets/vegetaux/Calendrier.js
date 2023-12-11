import imgVegetaux from '../../assets/typesPoubelles/vegetaux.png';
import '../../../styles/choixDechets/vegetaux/Calendrier.css';


function Calendrier() {
    return(
        <div className='calendrierVegetaux'>
            <h2>Vegetaux</h2>
            <p>Vous pouvez attendre la collecte ou déposer dans la déchetterie la plus proche</p>

            <div className='imgBenne'>
                <div>
                <img src={imgVegetaux} alt='Benne Organiques' id='imgOrganiques' />
                </div>
                <div>
                    Appel calendrier
                </div>
            </div>
        </div>
    )
}

export default Calendrier;