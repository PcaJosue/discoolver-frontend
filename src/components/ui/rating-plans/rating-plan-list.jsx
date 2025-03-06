import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RatingPlan from "../../common/rating-plan/rating-plan";
import ratingsData from "../../../assets/ratings-data";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 150
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 90
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.,
      partialVisibilityGutter: 16
    }
  };


const RatingPlanList = () => {
    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
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
              {ratingsData.map((rating) => (
                 <RatingPlan key={rating.id} ratingPlanImage={rating.ratingPlanImage} rating={rating.rating}  planName={rating.planName} />
              ))}
               
            </Carousel>
        </div>
    )
}   

export default RatingPlanList;
