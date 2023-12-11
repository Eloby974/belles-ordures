import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import communesData from '../../../data/communes.geojson';
import '../../../styles/choixDechets/autres/Map.css';



 // Ajustez ce chemin selon l'emplacement de votre fichiernpm




const icon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const markerData = [
    { id: 1, position: [-20.9289, 55.3351], popupText: "Centre de propreté de Saint-Laurent - Commune de La Possession, 1 rue Thomas Sankara ZAC Saint-Laurent 97419 La Possession " },
    { id: 2, position: [-20.9375455, 55.3113876], popupText: "Déchèterie de la Zone Artisanale du Port,2 Rue Corré Léonus, 97420 Le Port" },
    { id: 3, position: [-20.9488345, 55.2836298], popupText: "Déchèterie de la Marine - Commune du Port, Boulevard de la Marine, 97420 Le Port" },
    { id: 4, position: [-21.0352862, 55.2968434], popupText: " Centre de propreté du Guillaume - Commune de Saint-Paul, Chemin de la Glacière, 97423 Saint-Paul" },
    { id: 5, position: [-20.991382598876953, 55.28450012207031], popupText: "Centre de propreté de l’Étang - Commune de Saint-Paul, 65 Rue Jacob de la Haye, Saint-Paul " },
    { id: 6, position: [-21.02466, 55.2720034], popupText: "Centre de propreté de Plateau Caillou - Commune de Saint-Paul, Avenue des Bengalis, 97415 Saint-Paul, " },
    { id: 7, position: [-21.0741342, 55.2231917], popupText: "Centre de propreté de l’Hermitage les Bains - Commune de Saint-Paul, Avenue de Bourbon, 97434 Saint-Gilles-les-Bains" },
    { id: 8, position: [-21.0096, 55.2707], popupText: "Centre de propreté de Carrosse-Roquefeuil - Commune de Saint-Paul, 97434 Arrondissement de Saint-Paul " },
    { id: 9, position: [-21.107862, 55.2982928], popupText: "Déchèterie les Capucines - Commune de Trois-Bassins, Chemin des Barrières, 97426 Les Trois Bassins" },
    { id: 10, position: [-21.1706, 55.2882], popupText: "Déchèterie éphémère Le Plate (Saint-Leu) - Commune de Saint-Leu, Place maxime Laope 97436 Saint-Leu" },
    { id: 11, position: [-21.1911001, 55.3019627], popupText: "Déchèterie Thénor - Commune de Saint-Leu, 7 chemin Georges Thénor 97436 Saint-Leu" },
    { id: 12, position: [-21.1706, 55.2882], popupText: "Déchèterie de La Chaloupe - Commune de Saint-Leu, 4 chemin Raymond Rivière 97416 La Chaloupe " },
    { id: 13, position: [-21.13995317830397, 55.27619183063507], popupText: "Déchèterie de la Pointe des Châteaux - Commune de Saint-Leu, CD12 Pointe des Châteaux 97436 Saint-Leu " },
    // Ajoutez d'autres marqueurs ici
];

const Map = () => {
    const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);

    useEffect(() => {
        fetch(communesData)
            .then(response => response.json())
            .then(data => setGeoJsonFeatures(data))
            .catch(error => console.error('Error loading GeoJSON:', error));
        // Supprimez la ligne suivante, elle n'est pas nécessaire
       //  L.geoJSON(geoJsonFeature).addTo(Map);
    }, []);
    
    
    

    return (
        <div className='mapEncombrants' style={{ display: 'flex', justifyContent: 'center' }}>
        <MapContainer center={[-21.0006099, 55.2771585]} zoom={12} style={{ height: '25vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markerData.map(marker => (
                <Marker key={marker.id} position={marker.position} icon={icon}>
                    <Popup>{marker.popupText}</Popup>
                </Marker>
            ))}
            {geoJsonFeatures && <GeoJSON data={geoJsonFeatures} />}
            
        </MapContainer>

        <div className='infoDecheterie'>
            <p>Le conteneur le plus proche est située au :</p>
            <p><strong>3 rue du bonheur, 97490 La Possession</strong></p>
        </div>
        
        </div>
    );
};

export default Map;