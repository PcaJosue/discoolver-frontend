import styles from "./ButtonOutline.module.scss";

const ButtonOutline = ({clickedState, children}) => {
    const [isClicked, setIsClicked] = clickedState;
    return (
        <button 
            className={`${styles.menuButtonContainer} ${isClicked ? styles.active : ""}`} onClick={()=>setIsClicked(!isClicked)} >
            {...children}
        </button>
    )
}

export default ButtonOutline;
 