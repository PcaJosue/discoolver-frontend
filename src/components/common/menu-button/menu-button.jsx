import styles from "./menu-button.module.scss";
import SVGIcon from "../svg-icon/svg-icon";
import COLORS from "../../../config/colors";
import { useState } from "react";

const MenuButton = ({text, icon,  showText=true, handleAction}) => {

    const [isActive, setIsActive] = useState(false);

    const handleActionButton = () => {
        setIsActive(!isActive);
        handleAction();
    }

    return (
        <button className={styles.menuButtonContainer} onClick={handleActionButton}>
            <SVGIcon name={icon} color={isActive ? COLORS.menuButton.active : COLORS.menuButton.inactive} width={24} height={24}/>
            {showText && <span className={isActive ? `${styles.text} ${styles.textActive}` : styles.text}>{text}</span>}
        </button>
    )
}   

export default MenuButton;
