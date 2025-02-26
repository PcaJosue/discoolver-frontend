import styles from "./CircleHashtag.module.scss";
import CircleProfile from "../circle_profile/CircleProfile";
import ButtonOutline from "../buttonOutline/ButtonOutline";
import { useState } from "react";
const CircleHashtag = ({avatar, hashtag}) => {
    
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={styles.circleHashtagContainer}>
            <CircleProfile avatar={avatar} size={106} />
            <ButtonOutline clickedState={[isClicked, setIsClicked]}>
                <span>{hashtag}</span>
            </ButtonOutline>
        </div>
    )
}

export default CircleHashtag;
