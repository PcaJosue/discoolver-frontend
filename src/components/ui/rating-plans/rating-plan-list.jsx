import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RatingPlan from "../../common/rating-plan/rating-plan";
import ratingsData from "../../../assets/ratings-data";
import { useRef, useEffect, useState } from "react";
import useCarouselItemCalculator from "../../../api/hooks/useCarouselItemCalculator";



const RatingPlanList = ({data}) => {
  
  const containerRef = useRef(null);
  const itemWidth = 144;
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
          items: visibleItems-1,
          slidesToSlide: 1,
          partialVisibilityGutter: 10
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: visibleItems-1, // Ajustamos para tabletas
          slidesToSlide: 1,
          partialVisibilityGutter: 10
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: visibleItems, // Ajustamos para móviles
          slidesToSlide: 1,
          partialVisibilityGutter: 10
        }
      });
      
      // Indicar que estamos listos para renderizar
      setIsReady(true);
    }
  }, [visibleItems, ratingsData.length]);



    return (
        <div ref={containerRef}>
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
                containerClass="RatingPlanListCarouselContainer"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="RatingPlanListCarouselItem"
                partialVisible={true}
                minimumTouchDrag={80}
            >
              {data.map((rating) => (
                 <RatingPlan key={rating.id} ratingPlanImage={rating.ratingPlanImage} rating={rating.rating}  planName={rating.planName} />
              ))}
               
            </Carousel>
            )}
        </div>
    )
}   

export default RatingPlanList;
