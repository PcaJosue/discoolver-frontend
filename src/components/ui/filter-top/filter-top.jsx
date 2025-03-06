import { useState } from "react";
import "./filter-top.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SVGIcon from "../../common/svg-icon/svg-icon";
import ResponsiveSelect from "../../common/responsive-select/responsive-select";

const FilterTop = () => {

    const options = [
        {label: "Todos", values: null , id: 0}, 
        {label: "Vuelos", values: null, id: 1},
        {label: "Transporte", values: null, id: 2},
        {label: "Actividades", values: null, id: 3},
        {label: "Hoteles", values: null, id: 4},
        {label: "Alquiler de autos", values: null, id: 5},
        {label: "Paquetes", values: null, id: 6}
    ];

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
            <Carousel responsive={responsive} deviceType="mobile" removeArrowOnDeviceType={["tablet", "mobile"]} containerClass="carousel-filter"
            itemClass="carousel-filter-item"
            sliderClass="carousel-filter-slider"
            >
                {options.map((option) => (
                    <ResponsiveSelect key={option.id} option={option} isFilterItem={true}/>
                ))}

            </Carousel>
        </div>
    )
}

export default FilterTop;
