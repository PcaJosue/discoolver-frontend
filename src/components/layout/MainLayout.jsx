import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import styles from "./MainLayout.module.scss";
import { useState } from "react";
import Header from "../common/Header/Header";
const MainLayout = () => {
    const filterState = useState(false);
    return (
        <>
            <main className={styles.mainLayout}>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;
