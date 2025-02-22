
import Link from "next/link";
import "../../app/globals.scss"
import moonIcon from "./moon.png"
import sunIcon from "./sun.png"
import Image from "next/image";

function Nav({ theme, setTheme }) {
    return (
        <div className={`nav nav-${theme}`}>
            <div className="nav-box">
                <div className="logo-box">
                    {/* <Link href="/">
                        {
                            theme === "light"
                                ? <img src={require("./logolight.png")} alt="Logo" className="logo" />
                                : <img src={require("./logo.png")} alt="Logo" className="logo" />
                        }
                    </Link>
                    <Link href="/">
                        <p className={`logo-text logo-text-${theme}`}>Sahil Kalkal</p>
                    </Link> */}


                    <div className="opw-box">
                        <div className="odotbox">
                            <div className="odot">

                            </div>
                            <div className="odotwave">

                            </div>
                        </div>
                        <p className="otwt">
                            Open to work
                        </p>
                    </div>


                </div>
                <div className="menu">
                    <Link href="/">
                        <p className={`menu-item menu-item-${theme}`}>Home</p>
                    </Link>
                    <Link href="/about">
                        <p className={`menu-item menu-item-${theme}`}>About Me</p>
                    </Link>
                    <Link href="/projects">
                        <p className={`menu-item menu-item-${theme}`}>Projects</p>
                    </Link>
                    <Link href="/blogs">
                        <p className={`menu-item menu-item-${theme}`}>Blogs</p>
                    </Link>

                    {
                        theme === "light"
                            ? <Image onClick={() => setTheme("dark")} src={moonIcon} alt="Switch to dark mode" className="mode" />
                            : <Image onClick={() => setTheme("light")} src={sunIcon} alt="Switch to light mode" className="mode" />
                    }

                    {/* <img src={require("./github.png")} alt="" className="mode" /> */}
                </div>
            </div>
        </div>
    );
}

export default Nav;
