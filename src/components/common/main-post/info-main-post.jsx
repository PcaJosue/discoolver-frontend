import styles from "./info-main-post.module.scss";
import CircleProfile from "../circle-profile/circle-profile";
import CircleInfo from "../circle-info/circle-info";
import SVGIcon from "../svg-icon/svg-icon";
import ButtonIcon from "../button-icon/button-icon";
import { useRef, useState, useEffect } from "react";
const InfoMainPost = ({avatar, title, description, isLikedState}) => {

    const textRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        if (textRef.current) {
          setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
        }
      }, [description]);

      const toggleExpanded = () => {
        setExpanded(prev => !prev);
      };

    return (
        <div className={styles.infoMainPostContainer}>
            <div className={styles.infoMainStats}>
                <div className={styles.infoMainPostLeft}>
                    <CircleProfile avatar={avatar} size={24}/>
                    <CircleInfo info="+99K"/>
                </div>
                <div className={styles.infoMainPostRight}>
                    <ButtonIcon icon="save" color="#2B2B40" clickedState={isLikedState}/>
                    <SVGIcon name="share" color="#2B2B40" width={24} height={24}/>
                </div>
            </div>
            <div className={styles.infoMainPostDescription}>
                <p className={styles.infoMainPostTitle}>
                    Recomendado por [<span>{title}</span>] <span>+999.999</span> </p>
                    <div className={styles.descriptionContainer}>
                    <p 
                        ref={textRef} 
                        className={`${styles.infoMainPostDescriptionText} ${expanded ? styles.expanded : ''}`}
                        style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: expanded ? "unset" : 2,
                            WebkitBoxOrient: "vertical"
                        }}
                    >
                        {description}
                    </p>
                    {isTruncated && (
                        <button className={styles.infoMainPostMore} onClick={toggleExpanded}>
                            {expanded ? "Menos" : "Más"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InfoMainPost;