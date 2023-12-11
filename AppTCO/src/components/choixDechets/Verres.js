import React, { useState } from 'react';
import ChoixImg from './verres/ChoixImg';
import Calendrier from './verres/Calendrier';
import Map from './verres/Map';
import '../../styles/choixDechets/Verres.css';
import BoutonCalendrier from './verres/boutons/BoutonCalendrier';
import BoutonMap from './verres/boutons/BoutonMap';


function Verres() {
    const [affichage, setAffichage] = useState('calendrier');

    const afficherCalendrier = () => {
        setAffichage('calendrier');
    };

    const afficherMap = () => {
        setAffichage('map');
    };

    return (
        <div className='verres'>
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

export default Verres;