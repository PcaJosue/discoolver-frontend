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
import allPosts from "../../assets/all_posts";
import useMobile from "../../api/hooks/useMobile";
const Home = () => {

    const filterState = useState(false);
    const [isFilterActive] = filterState;
    const isMobile = useMobile();

    return (
        <div>
            <Header filterState={filterState}/>
            
            <div className={styles.homeContainer}>
                {isFilterActive && <FilterTop filterState={filterState}/>}
                {!isFilterActive && isMobile && <RecommendedTop />}

                { allPosts.map((post, index) =>{
                    console.log(post);

                    if (post.type === "main_post") {
                        return (
                            <div key={index} className={styles.mainPostListContainer}>
                                {post.data.map((main_post, main_post_index) => (
                                    <MainPost key={main_post_index} {...main_post} />
                                ))}
                            </div>
                        );
                        
                    }

                    if(post.type === "influencer_list") {
                        return (<InfluencerList key={index} data={post.data}/>)
                    }

                    if(post.type === "circle_hashtag_plans") {
                        return (<CircleHashtagList key={index} data={post.data}/>)
                    }

                    if(post.type === "list_plan") {
                        return (<ListPlan key={index} data={post.data}/>)
                    }

                    if(post.type === "rating_plan") {
                        return (<RatingPlanList key={index} data={post.data}/>)
                    }

                    if(post.type === "secondary_post") {
                        return (<SecondaryPostList key={index} data={post.data}/>)
                    }
                    
                })}
                
                
            </div>
        </div>
    )
}

export default Home;