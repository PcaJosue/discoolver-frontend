import React, { useState } from 'react';
import styles from './plan.module.scss';
import ButtonOutline from '../../../common/button-outline/button-outline';
import SVGIcon from '../../../common/svg-icon/svg-icon';
import Title from '../../../common/text/title';
import Description from '../../../common/text/description';

const Plan = ({rating, title, description, image}) => {


  return (
    <div className={styles.PlanContainer}>
        <div className={styles.PlanImageContent}>
            <img src={image} alt="Plan" onDragStart={(e) => e.preventDefault()} />
            <ButtonOutline>
                <SVGIcon name="star" color="#575373" size={12} />
                <span>{rating}</span>
            </ButtonOutline>
        </div>
        <div className={styles.PlanTitleContent}>
            <Title title={title} />
            <div className={styles.PlanDescriptionContent}>
                <SVGIcon name="pin" color="rgba(0, 0, 0, 1)" width={16} height={16} />
                <Description description={description} />
            </div>
        </div>
        
    </div>
  );
};

export default Plan;
