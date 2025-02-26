import styles from './text.module.scss';

const Title = ({ title }) => {
    
    return (
        <span className={styles.Title} >
            {title}
        </span> 
    )
}

export default Title;
Title