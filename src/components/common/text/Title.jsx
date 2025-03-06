import styles from './text.module.scss';

const Title = ({ title , twoLines = false}) => {
    
    return (
        <span className={`${styles.Title} ${twoLines ? styles.twoLines : ''}`} >
            {title}
        </span> 
    )
}

export default Title;
Title