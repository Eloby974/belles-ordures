import imgOrganiques from '../../../components/assets/typesDechet/organique.png';
import '../../../styles/choixDechets/organique/ChoixImg.css';

function ChoixImg() {
    return (
        <div className='choixImg'>
            <h3>Organiques</h3>
                <img src={imgOrganiques} alt="img Organiques" id="imgOrganiques" />


        </div>
    )
}

export default ChoixImg;