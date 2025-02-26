import React, { useState } from 'react';
import styles from './Plan.module.scss';
import ButtonOutline from '../../../common/buttonOutline/ButtonOutline';
import SVGIcon from '../../../common/svg_icon/SvgIcon';
import Title from '../../../common/text/Title';
import Description from '../../../common/text/Description';

const Plan = ({rating, title, description, image}) => {

    const clickedState = useState(false);

  return (
    <div className={styles.PlanContainer}>
        <div className={styles.PlanImageContent}>
            <img src={image} alt="Plan" onDragStart={(e) => e.preventDefault()} />
            <ButtonOutline clickedState={clickedState}>
                <SVGIcon name="star" color="#575373" size={12} />
                <span>{rating}</span>
            </ButtonOutline>
        </div>
        <div className={styles.PlanTitleContent}>
            <Title title={title} />
            <div className={styles.PlanDescriptionContent}>
                <SVGIcon name="pin" color="#455A64" width={16} height={16} />
                <Description description={description} />
            </div>
        </div>
        
    </div>
  );
};

export default Plan;
