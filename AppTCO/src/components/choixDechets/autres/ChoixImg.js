import imgEncombrants from '../../../components/assets/typesDechet/encombrants.png';
import '../../../styles/choixDechets/autres/ChoixImg.css';

function ChoixImg() {
    return (
        <div className='choixImg'>
            <h3>Encombrants</h3>
                <img src={imgEncombrants} alt="img Verres" id="imgVerres" />
        </div>
    )
}

export default ChoixImg;