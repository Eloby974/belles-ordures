import React, { useState } from 'react';
import ChoixImg from './autres/ChoixImg';
import Calendrier from './autres/Calendrier';
import Map from './autres/Map';
import '../../styles/choixDechets/Autres.css';
import BoutonCalendrier from './autres/bouton/BoutonCalendrier'; // Assurez-vous que c'est le bon chemin
import BoutonMap from './autres/bouton/BoutonMap';

function Autres() {
    const [affichage, setAffichage] = useState('calendrier');

    const afficherCalendrier = () => {
        setAffichage('calendrier');
    };

    const afficherMap = () => {
        setAffichage('map');
    };

    return (
        <div className='autres'>
            <ChoixImg />
            <div className='boutons'>
                <BoutonCalendrier onClick={afficherCalendrier} />
                <BoutonMap onClick={afficherMap} />
            </div>
            {affichage === 'calendrier' && <Calendrier />}
            {affichage === 'map' && <Map />}
        </div>
    );
}

export default Autres;
