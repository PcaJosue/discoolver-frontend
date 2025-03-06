import icons from "../../../assets/icons";


function SVGIcon({ name, color = "black", width=16, height=16 }) {
    return (
        <span style={{ display: "inline-block", width: width, color: color }}>
            {icons[name]}
        </span>
    );
}

export default SVGIcon;