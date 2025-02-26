import "./SecondaryPost.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircleProfile from "../../common/circle_profile/CircleProfile";
import secondaryPosts from "../../../assets/secondaryPosts";

const SecondaryPostList = () => {

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
            partialVisibilityGutter: 10
        }
    };


    return (
        <div className="containerSecondaryPost">

            <Carousel responsive={responsive} deviceType="mobile" removeArrowOnDeviceType={["tablet", "mobile"]} containerClass="carousel-secondaryPost"
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
                infinite={true}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
            >
                {
                    secondaryPosts.map((post, index) => (
                        <div className="secondaryPostContainer" key={index}>
                            <div className="secondaryPostImage">
                                <img src={post.image} alt="secondaryPost" onDragStart={(e) => e.preventDefault()} />
                                <span>{post.hashtag}</span>
                            </div>
                            <div className="secondaryPostContent">
                                <CircleProfile avatar={post.profileImg} size={32} />
                                <div className="secondaryPostInfo">
                                    <span className="secondaryPostName">{post.name}</span>
                                    <span className="secondaryPostNickname">{post.nickname}</span>
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
