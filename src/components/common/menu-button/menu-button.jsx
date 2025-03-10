import styles from "./menu-button.module.scss";
import SVGIcon from "../svg-icon/svg-icon";
import COLORS from "../../../config/colors";

const MenuButton = ({text, icon,  isActive, showText=true, handleAction}) => {
    return (
        <button className={styles.menuButtonContainer} onClick={handleAction}>
            <SVGIcon name={icon} color={isActive ? COLORS.menuButton.active : COLORS.menuButton.inactive} width={24} height={24}/>
            {showText && <span className={isActive ? `${styles.text} ${styles.textActive}` : styles.text}>{text}</span>}
        </button>
    )
}   

export default MenuButton;
