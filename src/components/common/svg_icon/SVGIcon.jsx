import icons from "../../../assets/icons";


function SVGIcon({ name, color = "black", width=24, height=24 }) {
    return (
        <span style={{ display: "inline-block", width: width, height: height, color, cursor: "pointer"   }}>
            {icons[name]}
        </span>
    );
}

export default SVGIcon;