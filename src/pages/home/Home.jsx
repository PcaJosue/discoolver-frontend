import Header from "../../components/common/Header/Header";
import RecommendedTop from "../../components/ui/recommended_top/RecommendedTop";
import MainPost from "../../components/common/main-post/MainPost";
import posts from "../../assets/posts";
import { useState } from "react";
import FilterTop from "../../components/ui/filterTop/FilterTop";
import SecondaryPostList from "../../components/ui/secondary_post/SecondaryPost";
const Home = () => {

    const filterState = useState(false);
    const [isFilterActive] = filterState;

    return (
        <div>
            <Header filterState={filterState}/>
            {isFilterActive && <FilterTop filterState={filterState}/>}
            {!isFilterActive && <RecommendedTop />}
            <SecondaryPostList />
            {posts.map((post, index) => (
                <MainPost key={index} {...post} />
            ))}

            
        </div>
    )
}

export default Home;