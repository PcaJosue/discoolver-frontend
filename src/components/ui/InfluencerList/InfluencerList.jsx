import  "./InfluencerList.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Influencer from "../../common/Influecer/Influencer";
import influencerListData from "../../../assets/influencerList";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 150
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 90
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.,
      partialVisibilityGutter: 10
    }
  };



const InfluencerList = () => {
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
                containerClass="InfluencerListCarouselContainer"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="InfluencerListCarouselItem"
                partialVisible={true}
                minimumTouchDrag={80}
            >
                {influencerListData.map((influencer)=>(
                    <Influencer key={influencer.id} avatar={influencer.avatar} nickname={influencer.nickname} />
                ))}
            </Carousel>
        </div>
    )
}

export default InfluencerList;
