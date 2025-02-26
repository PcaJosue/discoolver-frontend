import icons from "../../../assets/icons";


function SVGIcon({ name, color = "black", width, height }) {
    return (
        <span style={{ display: "inline-block", width: width, height: height, color   }}>
            {icons[name]}
        </span>
    );
}

export default SVGIcon;