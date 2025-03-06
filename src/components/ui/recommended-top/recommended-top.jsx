import ResponsiveSelect from "../../common/responsive-select/responsive-select";
import styles from "./recommended-top.module.scss";

const RecommendedTop = () => {

    const option = {
        values: ["Ciudad", "Pais"],
        label: 'Seleccione',
        id: 0
    }


    const handleChange = (selectedOption) => {
        console.log('Opción seleccionada:', selectedOption);
    };

    return (
        <>
            <div className={styles.recommendedTop}>
                <span className={styles.recommendedTopTitle}>RECOMENDADO</span>
                <ResponsiveSelect
                    option={option}
                    onChange={handleChange}
                />
            </div>


        </>
    )
}

export default RecommendedTop;
