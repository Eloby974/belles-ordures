import React from 'react';
import { useLocation } from 'react-router-dom';
import collecteData from '../data/collecte.json';
import '../styles/Table.css';
import Verres from './choixDechets/Verres';
import Autres from './choixDechets/Autres';
import Organique from './choixDechets/Organique';
import Cartons from './choixDechets/Cartons';
import Vegetaux from './choixDechets/Vegetaux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePrevArrow from './choixDechets/SamplePrevArrow';
import SampleNextArrow from './choixDechets/SampleNextArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Table() {
      // Récupérer les données passées par le routeur
  const location = useLocation();
  const { selectedNomVoie } = location.state || {};


  // Filtrer les données en fonction du nom de la rue sélectionnée
  const filteredData = collecteData.filter((item) => item.nom_rue === selectedNomVoie);


  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  
  

  // Afficher les informations spécifiques à la rue sélectionnée
  return (
    <div className="table">

      <div className='header'>

      <div className='boutonSearch'>
        <Link to="/">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-2x" />
        </Link>
      </div>

      <div className='nomVille'>
          {filteredData.map((data, index) => (
            <div key={index}>
              <p>{data.commune}</p>
              {/* Autres informations de data */}
            </div>
          ))}
        </div>


        <div className='nomVoie'>
          {filteredData.map((data, index) => (
            <div key={index}>
              <p>{data.nom_rue}</p>
              {/* Autres informations de data */}
            </div>
          ))}
        </div>

      </div>


    <div className='choixDechets'>
      <Slider {...settings}>
          <Verres />
          <Autres />
          <Organique />
          <Cartons />
          <Vegetaux />
      </Slider>
    </div>


    </div>

  );
}

export default Table;