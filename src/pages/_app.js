import Nav from "@/components/nav/nav";
import "../app/globals.scss"
import { useState } from "react";
import Footer from "@/components/footer/footer";

export default function App({ Component, ...propsPage }) {


    const [theme, setTheme] = useState('dark')

    return (
        <div className={`App App-${theme}`}>
            <div className={`app-content app-content-${theme}`}>
                <Nav theme={theme} setTheme={setTheme} />
                <Component {...propsPage} theme={theme} />
                <Footer />
            </div>
        </div>
    )
}