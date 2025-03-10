import { useState } from "react";
import "./filter-top.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SVGIcon from "../../common/svg-icon/svg-icon";
import { useEffect } from "react";
import Select from 'react-select';
import Modal from 'react-modal';

const FilterTop = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedValues, setSelectedValues] = useState({});

    const options = [
        { label: "Vuelos", values: [{ value: 'Vuelo 1', label: 'Vuelo 1' }, { value: 'Vuelo 2', label: 'Vuelo 2' }, { value: 'Vuelo 3', label: 'Vuelo 3' }], id: 1 },
        { label: "Transporte", values: [{ value: 'Transporte 1', label: 'Transporte 1' }, { value: 'Transporte 2', label: 'Transporte 2' }, { value: 'Transporte 3', label: 'Transporte 3' }], id: 2 },
        { label: "Actividades", values: [{ value: 'Actividad 1', label: 'Actividad 1' }, { value: 'Actividad 2', label: 'Actividad 2' }, { value: 'Actividad 3', label: 'Actividad 3' }], id: 3 },
        { label: "Hoteles", values: [{ value: 'Hotel 1', label: 'Hotel 1' }, { value: 'Hotel 2', label: 'Hotel 2' }, { value: 'Hotel 3', label: 'Hotel 3' }], id: 4 },
        { label: "Alquiler de autos", values: [{ value: 'Alquiler de auto 1', label: 'Alquiler de auto 1' }, { value: 'Alquiler de auto 2', label: 'Alquiler de auto 2' }, { value: 'Alquiler de auto 3', label: 'Alquiler de auto 3' }], id: 5 },
        { label: "Paquetes", values: [{ value: 'Paquete 1', label: 'Paquete 1' }, { value: 'Paquete 2', label: 'Paquete 2' }, { value: 'Paquete 3', label: 'Paquete 3' }], id: 6 }
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            partialVisibilityGutter: 30
        }
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const handleChangeMobile = (option) => {
        setSelectedCategory(option);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const selectOptionAndClose = (value) => {
        setSelectedOption(value);
        setSelectedValues(prev => ({
            ...prev,
            [selectedCategory.id]: value
        }));
        setIsModalOpen(false);
    };


    return (
        <div className="filterTopContainer">
            {isMobile && (
                <>
                    <Carousel responsive={responsive} deviceType="mobile" removeArrowOnDeviceType={["tablet", "mobile"]} containerClass="carousel-filter"
                        itemClass="carousel-filter-item"
                        sliderClass="carousel-filter-slider"
                    >
                        <button className="filterOption" key={"Todos"} onClick={() => {}}>
                            <div className="filterOptionText">
                                Todos
                            </div>
                        </button>
                        {options.map((option) => (
                            <button className="filterOption" key={option.id} onClick={() => handleChangeMobile(option)}>
                                <div className="filterOptionText">
                                    {selectedValues[option.id]?.label || option.label}
                                </div>
                                {option.values?.length > 1 && <SVGIcon name="dropdown" width={12} height={12} />}
                            </button>
                        ))}
                    </Carousel>

                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        className="filterModal"
                        overlayClassName="filterModalOverlay"
                    >
                        <div className="modalHeader">
                            <h2>{selectedCategory?.label}</h2>
                            <button onClick={closeModal}>
                                <SVGIcon name="close" width={24} height={24} />
                            </button>
                        </div>
                        <div className="modalContent">
                            {selectedCategory?.values.map((value) => (
                                <button
                                    key={value.value}
                                    className="modalOption"
                                    onClick={() => selectOptionAndClose(value)}
                                >
                                    {value.label}
                                </button>
                            ))}
                        </div>
                    </Modal>
                </>
            )}
            {!isMobile && <>
                <button className="filterSelect__control">
                    <div className="filterSelect__placeholder">Todos</div>
                </button>
                {options.map((option) => (
                    <Select
                        key={option.id}
                        value={selectedOption}
                        onChange={(e) => handleChange(option.values[e.value])}
                        options={option.values}
                        placeholder={option.label}
                        classNamePrefix="filterSelect"
                    />
                ))}

            </>

            }

        </div>
    )
}

export default FilterTop;
