import "./CircleHashtagList.scss";
import CircleHashtag from "../../common/circle-hashtag/CircleHashtag";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import circleHashtags from "../../../assets/circlehashtags";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 150
    },
    tablet: {
      breakpoint: { max: 1024, min: 465 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.,
      partialVisibilityGutter: 10
    }
  };

const CircleHashtagList = () => {
    return (
        <div>
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
                containerClass="CircleHashtagListCarouselContainer"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="CircleHashtagListCarouselItem"
                partialVisible={true}
                minimumTouchDrag={80}
            >
                {circleHashtags.map((hashtag) => (
                    <CircleHashtag key={hashtag.id} avatar={hashtag.avatar} hashtag={hashtag.hashtag} />
                ))}
                
            </Carousel>
        </div>
    )
}

export default CircleHashtagList;
