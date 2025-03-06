import styles from "./rating-plan.module.scss";
import ButtonOutline from "../button-outline/button-outline";
import SVGIcon from "../svg-icon/svg-icon";
import Title from "../text/title";
import { useState } from "react";
const RatingPlan = ({ratingPlanImage, rating, planName}) => {

    const clickedState = useState(false);

  return (
    <>
        <div className={styles.ratingPlanContainer}>
            <div className={styles.ratingPlanImageContainer}>
                <img src={ratingPlanImage} alt="rating plan" onDragStart={(e) => e.preventDefault()}/>
                <ButtonOutline>
                    <SVGIcon name="star" color="rgba(69, 90, 100, 1)" size={16} />
                    <span>{rating}</span>
                </ButtonOutline>
            </div>
            <div className={styles.ratingPlanTitleContainer}>
                <Title title={planName} twoLines={true} />
            </div>
        </div>
    </>
  )
};

export default RatingPlan;
