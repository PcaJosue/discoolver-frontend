import styles from "./circle-profile.module.scss";
const CircleProfile = ({ avatar , size = 40 }) => {
    const sizeStyle = size+'px';
    return (
        <div style={{ width: sizeStyle, height: sizeStyle }} className={styles.avatarContainer}>
            <img src={avatar} alt="Profile Avatar" className={styles.avatar}  onDragStart={(e) => e.preventDefault()}/>
        </div>
    )
} 

export default CircleProfile;
