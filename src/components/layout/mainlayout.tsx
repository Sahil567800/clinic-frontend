import { Outlet } from "react-router-dom"
import Header from "../common/header"
import Footer from "../common/footer"

export default function MainLayout() {
    return (<>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </>
    )
}