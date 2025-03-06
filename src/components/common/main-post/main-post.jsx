import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselItems from "../../../assets/main-post-data";
import CircleProfile from "../circle-profile/circle-profile";
import CustomDot from "./custom-dot";
import Hashtags from "./hashtags";
import InfoMainPost from "./info-main-post";
import "./main-post.scss";

const MainPost = ({ avatar, name, description, imageSize = 32, title, postDescription,hashtags }) => {

    const isLikedState = useState(false);

    return (
        <div className="mainPostContainer">
            <div className="mainPostHeader">
                <CircleProfile avatar={avatar} size={imageSize} />
                <div className="mainPostHeaderText">
                    <p className="mainPostHeaderTextName">{name}</p>
                    <p className="mainPostHeaderTextDescription">{description}</p>
                </div>
            </div>

            <Carousel
                additionalTransfrom={0}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carouselContainer"
                customDot={<CustomDot />}
                dotListClass="customDotList"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="mainPostCarousel"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {carouselItems.map(item=>(
                    <div className="mainPostCarousel" key={item.id}>
                        <img onDragStart={(e) => e.preventDefault()}
                            src={item.url}
                        />
                        <button>{item.title}</button>
                    </div>
                ))}

            </Carousel>

            <InfoMainPost avatar={avatar} title={title} description={postDescription} isLikedState={isLikedState}/>
            <Hashtags hashtags={hashtags}/>
        </div>

    )
}

export default MainPost;
