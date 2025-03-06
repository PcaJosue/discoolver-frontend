import { Outlet } from "react-router-dom";
import Footer from "../common/footer/footer";
import styles from "./main-layout.module.scss";
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
