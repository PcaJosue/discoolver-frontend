import styles from "./circle-info.module.scss";

const CircleInfo = ({info}) => {
    return (
        <div className={styles.counterContainer} >
            <div className={styles.counterBox}>
                <div className={styles.counterText}>{info}</div>
            </div>
        </div>
    )
}

export default CircleInfo;