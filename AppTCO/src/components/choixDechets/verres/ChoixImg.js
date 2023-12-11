import imgVerres from '../../../components/assets/typesDechet/bottle.png';
import '../../../styles/choixDechets/verres/ChoixImg.css';

function ChoixImg() {
    return (
        <div className='choixImg'>
            <h3>Verres</h3>
                <img src={imgVerres} alt="img Verres" id="imgVerres" />


        </div>
    )
}

export default ChoixImg;