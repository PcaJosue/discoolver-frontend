import styles from "./Influencer.module.scss";
import CircleProfile from "../circle_profile/CircleProfile";
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
