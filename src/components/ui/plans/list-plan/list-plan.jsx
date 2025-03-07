import styles from "./list-plan.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Plan from "../plan/plan";
import { useRef, useEffect, useState } from "react";
import useCarouselItemCalculator from "../../../../api/hooks/useCarouselItemCalculator";
const ListPlan = () => {

  const containerRef = useRef(null);
  const itemWidth = 265;
  const gap = 16;
  
  // Estado para almacenar la configuración responsive
  const [responsive, setResponsive] = useState({
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1, partialVisibilityGutter: 0 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1, partialVisibilityGutter: 0 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1, partialVisibilityGutter: 0 }
  });
  
  // Estado para controlar si debemos renderizar el carrusel
  const [isReady, setIsReady] = useState(false);
  
  const { 
    visibleItems
  } = useCarouselItemCalculator({
    containerRef,
    itemWidth,
    gap
  });

  // Actualizar la configuración responsive cuando cambian los cálculos o los datos
  useEffect(() => {
    if (visibleItems > 0) {
      setResponsive({
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: visibleItems,
          slidesToSlide: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: visibleItems, // Ajustamos para tabletas
          slidesToSlide: 1,
          partialVisibilityGutter: 90
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: visibleItems, // Ajustamos para móviles
          slidesToSlide: 1,
          partialVisibilityGutter: 90
        }
      });
      
      // Indicar que estamos listos para renderizar
      setIsReady(true);
    }
  }, [visibleItems]);


    return (
        <div ref={containerRef} className={styles.ListPlanContainer}>
            {isReady && (
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="ListPlanCarouselContainer"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="ListPlanCarouselItem"
                partialVisible={true}
                minimumTouchDrag={80}
            >
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
                <Plan image="https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                 rating={"Label"} title="Nombre del plan" description="@nicknamenombreinfluencer01extralargos" />
            </Carousel>
            )}
        </div>
    )
}   

export default ListPlan;
