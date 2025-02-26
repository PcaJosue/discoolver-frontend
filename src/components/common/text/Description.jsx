import styles from './text.module.scss';

const Description = ({description}) => {
    return (
        <span className={styles.Description}>
            {description}
        </span>
    )
}

export default Description;
