export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        left: "50%",
        zIndex: 2,
        cursor: "pointer",
        position: "absolute",
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
        float: "right",
        top: "-1000%",
        left: "760%",
        transform: "rotate(45deg)"
      }} />
      {/* Partie inférieure de la pointe de la flèche */}
      <div style={{
        background: "#555843",
        filter: "drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25))",
        width: "40px",
        height: "7px",
        position: "absolute",
        float: "right",
        top: "-880%",
        left: "760%",
        transform: "rotate(-45deg)"
      }} />
    </div>
  );
}
