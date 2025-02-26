import SVGIcon from "../svg_icon/SvgIcon";
import styles from "./buttonIcon.module.scss";


const ButtonIcon = ({icon, size=24, color, clickedState, round=false}) => {
    const [isClicked, setIsClicked] = clickedState;
    
    return (
        <>
            {round && 
                <button className={`${round ? styles.round : ""} ${styles.menuButtonContainer} `} onClick={() => setIsClicked(!isClicked)} >
                    <SVGIcon name={icon} color={color} size={size} />
                </button>
            }

            {!round && 
                <button className={`${styles.menuButtonContainer} ${isClicked ? styles.active : ""}`} onClick={()=>setIsClicked(!isClicked)} >
                    <SVGIcon name={icon} color={color} size={size} />
                </button>
            }
        
        </>
        
    )
}   

export default ButtonIcon;