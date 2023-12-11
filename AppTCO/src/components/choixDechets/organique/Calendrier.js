import imgBenne from '../../assets/typesPoubelles/nonRecyclable.png';
import '../../../styles/choixDechets/organique/Calendrier.css';


function Calendrier() {
    return(
        <div className='calendrierOrganique'>
            <h2>Non recyclables</h2>
            <p>Vous pouvez attendre la collecte ou déposer dans la déchetterie la plus proche</p>

            <div className='imgBenne'>
                <div>
                <img src={imgBenne} alt='Benne Organiques' id='imgOrganiques' />
                </div>
                <div>
                    Appel calendrier
                </div>
            </div>
        </div>
    )
}

export default Calendrier;