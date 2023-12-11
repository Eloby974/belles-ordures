export default function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex",
        left: "8%",
        zIndex: 2,
        cursor: "pointer",
        position: "absolute", // Important pour positionner les éléments de la flèche
      }} 
      onClick={onClick}
    >
      {/* Partie supérieure de la pointe de la flèche */}
      <div style={{
        background: "#555843",
        filter: "drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25))",
        width: "40px",
        height: "7px",
        position: "absolute",
        top: "-1000%",
        left: "120%",
        transform: "rotate(-45deg)" // Rotation inversée pour la flèche gauche
      }} />
      {/* Partie inférieure de la pointe de la flèche */}
      <div style={{
        background: "#555843",
        filter: "drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25))",
        width: "40px",
        height: "7px",
        position: "absolute",
        top: "-880%",
        left: "120%",
        transform: "rotate(45deg)" // Rotation inversée pour la flèche gauche
      }} />
    </div>
  );
}
