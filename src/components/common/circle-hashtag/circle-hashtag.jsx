import styles from "./circle-hashtag.module.scss";
import CircleProfile from "../circle-profile/circle-profile";
import ButtonOutline from "../button-outline/button-outline";
const CircleHashtag = ({avatar, hashtag}) => {
    

    return (
        <div className={styles.circleHashtagContainer}>
            <CircleProfile avatar={avatar} size={96} />
            <ButtonOutline >
                <span className={styles.hashtag}>{hashtag}</span>
            </ButtonOutline>
        </div>
    )
}

export default CircleHashtag;
