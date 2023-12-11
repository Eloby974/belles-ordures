import imgVegetaux from "../../assets/typesDechet/dechetVert.png";

function ChoixImg() {
    return(
        <div className="choixImg">
            <h3>Vegetaux</h3>
            <img src={imgVegetaux} alt="img Vegetaux" id="imgVegetaux" />
        </div>
    )
}

export default ChoixImg;