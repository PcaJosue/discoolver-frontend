import "./secondary-post.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SVGIcon from "../../common/svg-icon/svg-icon";
import ButtonOutline from "../../common/button-outline/button-outline";
const SecondaryPostList = ({data}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 250
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 96
        }
    };


    return (
        <div className="containerSecondaryPost">

            <Carousel 
                responsive={responsive} 
                removeArrowOnDeviceType={["tablet", "mobile"]} 
                containerClass="carousel-secondaryPost"
                itemClass="secondaryPostList"
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite={false}
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible={true}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
            >
                {
                    data.map((post, index) => (
                        <div className="secondaryPostContainer" key={index}>
                            <div className="secondaryPostImage">
                                <img src={post.image} alt="secondaryPost" onDragStart={(e) => e.preventDefault()} />
                                <ButtonOutline className="secondaryPostHashtag">
                                    <SVGIcon name="star" color="rgba(69, 90, 100, 1)" width={16} height={16} />
                                    <span>{post.hashtag}</span>
                                </ButtonOutline>
                            </div>
                            <div className="secondaryPostContent">
                                <div className="secondaryPostInfo">
                                    <span className="secondaryPostName">{post.name}</span>
                                    <span className="secondaryPostNickname">
                                        <SVGIcon name="pin" color="rgba(0, 0, 0, 1)" width={16} height={16} />
                                        <span className="secondaryPostNicknameText">{post.nickname}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Carousel>
        </div>

    )
}

export default SecondaryPostList;
