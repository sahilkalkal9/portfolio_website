import { Link } from "react-router-dom";
import "../../App.scss";

function Nav({ theme, setTheme }) {
    return (
        <div className={`nav nav-${theme}`}>
            <div className="nav-box">
                <div className="logo-box">
                    <Link to="/">
                        {
                            theme === "light"
                                ? <img src={require("./logolight.png")} alt="Logo" className="logo" />
                                : <img src={require("./logo.png")} alt="Logo" className="logo" />
                        }
                    </Link>
                    <Link to="/">
                        <p className={`logo-text logo-text-${theme}`}>Sahil Kalkal</p>
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/about-me">
                        <p className={`menu-item menu-item-${theme}`}>About Me</p>
                    </Link>
                    <Link to="/projects">
                        <p className={`menu-item menu-item-${theme}`}>Projects</p>
                    </Link>

                    {/* {
                        theme === "light"
                            ? <img onClick={() => setTheme("dark")} src={require("./moon.png")} alt="Switch to dark mode" className="mode" />
                            : <img onClick={() => setTheme("light")} src={require("./sun.png")} alt="Switch to light mode" className="mode" />
                    } */}
                </div>
            </div>
        </div>
    );
}

export default Nav;
