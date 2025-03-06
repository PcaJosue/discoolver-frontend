import styles from "./influencer.module.scss";
import CircleProfile from "../circle-profile/circle-profile";
const Influencer = ({avatar,nickname}) => {
    return (
        <div className={styles.influencerContainer}>
            <CircleProfile avatar={avatar} size={80} />
            <div className={styles.influencerInfo}>
                {nickname}
            </div>
        </div>
    )
}

export default Influencer;
