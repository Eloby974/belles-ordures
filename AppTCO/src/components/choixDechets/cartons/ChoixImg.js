import imgBenneCartons from '../../../components/assets/typesDechet/cartons.png';
import '../../../styles/choixDechets/cartons/ChoixImg.css';

function ChoixImg() {
    return (
        <div className='choixImg'>
            <h3>Cartons</h3>
                <img src={imgBenneCartons} alt="img Benne Cartons" id="imgCartons" />
        </div>
    )
}

export default ChoixImg;