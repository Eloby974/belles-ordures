import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import '../styles/Connexion.css';
import collecteData from '../data/collecte.json';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




function Connexion() {
  const [selectedVille, setSelectedVille] = useState("");
  const [selectedNomVoie, setSelectedNomVoie] = useState("");

  const navigate = useNavigate(); // Création d'une instance de useNavigate

  const handleSelectChange = (selectedOption) => {
    setSelectedVille(selectedOption.value);
    setSelectedNomVoie(""); // Réinitialise selectedNomVoie à chaque changement de ville
  };

  const handleSelectNomVoie = (selectedOption) => {
    setSelectedNomVoie(selectedOption.value);
  };

  const handleShowTable = () => {
    // Utiliser navigate pour rediriger vers la page Table avec l'état selectedNomVoie
    navigate('/table', { state: { selectedNomVoie } });
  };

  const uniqueCommunes = [...new Set(collecteData.map(ville => ville.commune))];
  const selectedVilleData = collecteData.filter(ville => ville.commune === selectedVille);
  const uniqueNomsVoie = [...new Set(selectedVilleData.map(ville => ville.nom_rue))];

  const villeOptions = uniqueCommunes.map(libcommune => ({
    value: libcommune,
    label: libcommune,
  }));

  const voieOptions = uniqueNomsVoie.map(nomVoie => ({
    value: nomVoie,
    label: nomVoie,
  }));

  return (
    <div className='connexion'>

      <div>
      <div id="titreApp">
    <h1>App de tri</h1>
    </div>

    <img src={logo} alt="logo" id="logo" />

      </div>

      <div className='villeSelect'>
        <label htmlFor="laVilleSelect">Selectionnez votre voie :</label>
        <Select 
          id="laVilleSelect"
          value={{ value: selectedVille, label: selectedVille }}
          onChange={handleSelectChange}
          options={villeOptions}
          className="custom-select-ville"
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: "#F5EEC8",
              borderRadius: 18,
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }),
          }}
        />
      </div>

      {selectedVille && (
        <div className='voieSelect'>
          <label className='textCommune' htmlFor="nomVoieSelect">Selectionnez votre voie :</label>
          <Select
            id="nomVoieSelect"
            value={{ value: selectedNomVoie, label: selectedNomVoie }}
            onChange={handleSelectNomVoie}
            options={voieOptions}
            className="custom-select-voie"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#F5EEC8",
                borderRadius: 18,
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
              }),
            }}
          />
        </div>
      )}

      <div className='afficheSelection'>
        {selectedVille && <div className='selectedVilleDisplay'><p>{selectedVille}</p></div>}
        {selectedNomVoie && <div className='selectedVoieDisplay'><p>{selectedNomVoie}</p></div>}
      </div>

      {selectedNomVoie && (
  <div className='showTableButton'>
    <button className='boutonValider' onClick={handleShowTable}>
      <FontAwesomeIcon icon={faCheck} className="fa-2x"/>
    </button>
  </div>
)}
    </div>
  );
}

export default Connexion;