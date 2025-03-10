import CustomSelect from "../../common/custom-select/custom-select";
import styles from "./filter-bar.module.scss";
import SVGIcon from "../../common/svg-icon/svg-icon";
const FilterBar = () => {

    const options = {
        destino: [
            { value: 'madrid', label: 'Madrid' },
            { value: 'barcelona', label: 'Barcelona' },
            { value: 'valencia', label: 'Valencia' },
          ],
        fechas: [
            { value: '15 Mar - 20 Apr', label: '15 Mar - 20 Apr' },
            { value: '01 Jun - 15 Jul', label: '01 Jun - 15 Jul' },
            { value: '20 Aug - 01 Oct', label: '20 Aug - 01 Oct' },
          ],
        experiencia: [
            { value: 'cityBreak', label: 'Descanso Urbano' },
            { value: 'beachRelaxation', label: 'Relajación en la Playa' },
            { value: 'adventureSeeker', label: 'Buscador de Aventuras' },
          ],
        tipoViaje: [
            { value: 'cityBreak', label: 'Descanso Urbano' },
            { value: 'beachRelaxation', label: 'Relajación en la Playa' },
            { value: 'adventureSeeker', label: 'Buscador de Aventuras' },
          ],
    };



    return (
        <div className={styles.filterBarContainer}>
            <CustomSelect  options={options.destino} placeholderLabel="Selecciona" placeholderTitle="Destino" placeholderIcon="point"/>
            <CustomSelect  options={options.fechas} placeholderLabel="Selecciona" placeholderTitle="Fechas" placeholderIcon="calendar"/>
            <CustomSelect  options={options.experiencia } placeholderLabel="Selecciona" placeholderTitle="Experiencia ciudad" placeholderIcon="point"/>
            <CustomSelect  options={options.tipoViaje} placeholderLabel="Selecciona" placeholderTitle="Tipo de viaje" placeholderIcon="point"/>
            <button className={styles.filterBarButton}>
                <SVGIcon name="point" width={24} height={24} color="white" />
            </button>
        </div>
    )
}

export default FilterBar;
