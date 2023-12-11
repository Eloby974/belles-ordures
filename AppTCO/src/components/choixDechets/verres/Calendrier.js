import imgVerre from '../../assets/typesPoubelles/verre.png';
import '../../../styles/choixDechets/verres/Calendrier.css';

function Calendrier() {

  return (
    <div className='calendrierVerre'>
      <h2>Verres</h2>
      <p>Deposez vos dechets dans les conteneur à verre</p>

      <div className='imgBenne'>
        <div>
          <img src={imgVerre} alt='Benne Verre' id='imgVerre' />
        </div>
        <div>
          <p>Le conteneur le plus proche de vous est situé au : </p>
          <p><strong>3 rue du bonheur,</strong></p>
          <p><strong>97490 La Possession</strong></p>
    

        </div>
      </div>
    </div>
  );
}

export default Calendrier;
