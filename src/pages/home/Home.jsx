import Header from "../../components/common/header/header";
import RecommendedTop from "../../components/ui/recommended-top/recommended-top";
import MainPost from "../../components/common/main-post/main-post";
import posts from "../../assets/posts";
import { useState } from "react";
import SecondaryPostList from "../../components/ui/secondary-post/secondary-post";
import ListPlan from "../../components/ui/plans/list-plan/list-plan";
import styles from "./Home.module.scss";
import InfluencerList from "../../components/ui/influencer-list/influencer-list";
import CircleHashtagList from "../../components/ui/circle-hashtag-list/circle-hashtag-list";
import RatingPlanList from "../../components/ui/rating-plans/rating-plan-list";
import FilterTop from "../../components/ui/filter-top/filter-top";
const Home = () => {

    const filterState = useState(false);
    const [isFilterActive] = filterState;


    return (
        <div>
            <Header filterState={filterState}/>
            
            <div className={styles.homeContainer}>
                {isFilterActive && <FilterTop filterState={filterState}/>}
                {!isFilterActive && <RecommendedTop />}
                <InfluencerList/>
                <CircleHashtagList />
                <ListPlan />
                <RatingPlanList />
                <SecondaryPostList />

                <div className={styles.mainPostListContainer}>
                    {posts.map((post, index) => (
                        <MainPost key={index} {...post} />
                    ))}

                </div>
                
                
            </div>
        </div>
    )
}

export default Home;