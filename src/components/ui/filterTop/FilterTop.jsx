import { useState } from "react";
import ButtonIcon from "../../common/buttonIcon/ButtonIcon";
import "./FilterTop.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const FilterTop = ({ filterState }) => {

    const [activeFilter, setActiveFilter] = useState(0);
    const options = ["Todos", "Vuelos", "Transporte", "Actividades", "Hoteles", "Alquiler de autos", "Paquetes"];

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


    return (
        <div className="filterTopContainer">
            <ButtonIcon icon="filter" round size={38} color="#546E7A" clickedState={filterState} />
            <Carousel responsive={responsive} deviceType="mobile" removeArrowOnDeviceType={["tablet", "mobile"]} containerClass="carousel-filter">
                {options.map((option, index) => (
                    <button className={`filterOption ${activeFilter === index ? "active" : ""}`} key={index} onClick={() => setActiveFilter(index)}>
                        <span>{option}</span>
                    </button>
                ))}

            </Carousel>
        </div>
    )
}

export default FilterTop;
