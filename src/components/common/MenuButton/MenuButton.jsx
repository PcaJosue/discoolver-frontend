import COLORS from "../../../config/Colors";
import SVGIcon from "../svg_icon/SVGIcon";
import styles from "./MenuButton.module.scss";

const MenuButton = ({text, icon, isActive}) => {
    return (
        <div className={styles.menuButtonContainer}>
            <SVGIcon name={icon} color={isActive ? COLORS.menuButton.active : COLORS.menuButton.inactive} size={24}/>
            <span className={isActive ? `${styles.text} ${styles.textActive}` : styles.text}>{text}</span>
        </div>
    )
}   

export default MenuButton;
