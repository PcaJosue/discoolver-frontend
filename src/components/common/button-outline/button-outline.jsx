import styles from "./button-outline.module.scss";
import { useState } from "react";
const ButtonOutline = ({children, className}) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <button 
            className={`${styles.menuButtonContainer} ${isClicked ? styles.active : ""} ${className}`} onClick={()=>setIsClicked(!isClicked)} >
            {children}
        </button>
    )
}

export default ButtonOutline;
 