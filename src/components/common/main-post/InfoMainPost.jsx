import styles from "./InfoMainPost.module.scss";
import CircleProfile from "../circle_profile/CircleProfile";
import CircleInfo from "../circle_info/CircleInfo";
import SvgIcon from "../svg_icon/SvgIcon";
import ButtonIcon from "../buttonIcon/ButtonIcon";
const InfoMainPost = ({avatar, title, description, isLikedState}) => {
    return (
        <div className={styles.infoMainPostContainer}>
            <div className={styles.infoMainStats}>
                <div className={styles.infoMainPostLeft}>
                    <CircleProfile avatar={avatar} size={24}/>
                    <CircleInfo info="+99K"/>
                </div>
                <div className={styles.infoMainPostRight}>
                    <ButtonIcon icon="wishlist" color="#2B2B40" clickedState={isLikedState}/>
                    <SvgIcon name="info" color="#2B2B40" />
                </div>
            </div>
            <div className={styles.infoMainPostDescription}>
                <p className={styles.infoMainPostTitle}>{title}</p>
                <p className={styles.infoMainPostDescription}>{description}</p>
            </div>
        </div>
    )
}

export default InfoMainPost;