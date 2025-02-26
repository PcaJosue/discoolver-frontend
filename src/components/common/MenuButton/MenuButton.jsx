import COLORS from "../../../config/Colors";
import SVGIcon from "../svg_icon/SvgIcon";
import styles from "./MenuButton.module.scss";

const MenuButton = ({text, icon,  isActive, showText=true, handleAction}) => {
    return (
        <button className={styles.menuButtonContainer} onClick={handleAction}>
            <SVGIcon name={icon} color={isActive ? COLORS.menuButton.active : COLORS.menuButton.inactive} size={24}/>
            {showText && <span className={isActive ? `${styles.text} ${styles.textActive}` : styles.text}>{text}</span>}
        </button>
    )
}   

export default MenuButton;
