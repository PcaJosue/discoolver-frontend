import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
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
