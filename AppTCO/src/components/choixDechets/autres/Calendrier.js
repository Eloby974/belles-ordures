import imgBenne from '../../assets/typesPoubelles/emcombrants.png';
import '../../../styles/choixDechets/autres/Calendrier.css';


function Calendrier() {
    return(
        <div className='calendrierAutre'>
            <h2>Encombrants</h2>
            <p>Vous pouvez attendre la collecte ou déposer dans la déchetterie la plus proche</p>

            <div className='imgBenne'>
                <div>
                <img src={imgBenne} alt='Benne Encombrants' id='imgEncombrants' />
                </div>
                <div className='calendrier'>
                    <strong>lun</strong> j-4 01.01.2023<br></br>
                    <strong>mar</strong> j-8 10.01.2023<br></br>
                    <strong>mer</strong> j-15 15.01.2023<br></br>
                    <strong>lun</strong>  j-20 20.01.2023<br></br>
                    <strong>mar</strong> j-25 25.01.2023<br></br>
                </div>
            </div>
        </div>
    )
}

export default Calendrier;