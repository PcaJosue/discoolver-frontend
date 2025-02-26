import ResponsiveSelect from "../../common/Responsive-Select/ResponsiveSelect";
import styles from "./RecommendedTop.module.scss";

const RecommendedTop = () => {

    const options = [
        { value: 'Ciudad', label: 'Ciudad' },
        { value: 'Pais', label: 'Pais' },
    ];


    const handleChange = (selectedOption) => {
        console.log('Opción seleccionada:', selectedOption);
    };

    return (
        <>
            <div className={styles.recommendedTop}>
                <span className={styles.recommendedTopTitle}>TOP RECOMENDADOS</span>
                <ResponsiveSelect
                    options={options}
                    placeholder="Selecciona una opción"
                    onChange={handleChange}
                />
            </div>


        </>
    )
}

export default RecommendedTop;
