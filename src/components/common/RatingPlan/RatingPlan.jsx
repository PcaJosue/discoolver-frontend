import styles from "./RatingPlan.module.scss";
import ButtonOutline from "../buttonOutline/ButtonOutline";
import SVGIcon from "../svg_icon/SvgIcon";
import Title from "../text/Title";
import { useState } from "react";
const RatingPlan = ({ratingPlanImage, rating, planName}) => {

    const clickedState = useState(false);

  return (
    <>
        <div className={styles.ratingPlanContainer}>
            <div className={styles.ratingPlanImageContainer}>
                <img src={ratingPlanImage} alt="rating plan" onDragStart={(e) => e.preventDefault()}/>
                <ButtonOutline clickedState={clickedState}>
                    <SVGIcon name="star" color="#575373" size={16} />
                    <span>{rating}</span>
                </ButtonOutline>
            </div>
            <div className={styles.ratingPlanTitleContainer}>
                <Title title={planName} />
            </div>
        </div>
    </>
  )
};

export default RatingPlan;
