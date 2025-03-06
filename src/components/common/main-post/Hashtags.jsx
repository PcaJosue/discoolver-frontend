import styles from "./hashtags.module.scss";

const Hashtags = ({ hashtags }) => {

    const maxHashtags = 4;
    const hashtagsArray = hashtags.slice(0, maxHashtags);
    return (

        <div className={styles.hashtagsContainer}>
            {hashtagsArray.map((hashtag,index) => (
                <div className={styles.hashtag} key={index}>
                    {hashtag}
                </div>
            ))}
            {hashtags.length > maxHashtags && (
                <div className={styles.moreHashtags}>
                    +{hashtags.length - maxHashtags}
                </div>
            )}
        </div>
    )
}

export default Hashtags;
