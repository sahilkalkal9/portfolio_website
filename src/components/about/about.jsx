
import Link from "next/link"
import "../../app/globals.scss"
import Image from "next/image"

function About({ theme }) {
    return (
        <div className="about">
            <div className="about-box">
                <p className={`page-head page-head-${theme}`}>
                    About
                </p>
                <div className="about-desc">

                    <p className={`about-text about-text-${theme}`} >
                        <span className="list-update">
                            (Updated on 11 March 2025)
                        </span><br /><br />
                        Hello, I'm Sahil Kalkal — a self-taught web developer with a passion for creating engaging websites since 2020. I believe in the power of learning and sharing knowledge, which is why I write blogs on the topics I explore and master.
                        <br /><br />
                        Welcome to my digital garden! Here, you can delve into my journey, discover my projects, and read my blogs. I hope that you find inspiration and new insights from my work and content.
                        <br /><br />
                        One thing you’ll notice about my website is the absence of ads and trackers. I want you to navigate freely and comfortably. My motivation for writing blogs and articles is to express myself, inspire others to work hard, and connect with like-minded individuals.



                    </p>

                    <div className="contact-sec">
                        <p className={`about-sub-head about-sub-head-${theme}`}>
                            Contact
                        </p>
                        <div className="contact-opts">
                            <p className={`contact-opt contact-opt-${theme}`}>
                                1. Email : <a href="mailto:hello@sahilkalkal.com" className="linkto">hello@sahilkalkal.com</a>
                            </p>
                            <p className={`contact-opt contact-opt-${theme}`}>
                                2.  <a target="blank" href="https://linkedin.com/in/sahilkalkal">
                                    <span className="linkto">
                                        LinkedIn
                                    </span></a>
                                <Image src={require("./share.png")} alt="" className="share" />
                            </p>
                            <p className={`contact-opt contact-opt-${theme}`}>
                                3. <a href="https://github.com/sahilkalkal9" target="blank">
                                    <span className="linkto" >
                                        GitHub
                                    </span></a>
                                <Image src={require("./share.png")} alt="" className="share" />
                            </p>

                        </div>
                    </div>

                    <div className="doing-sec">
                        <p className={`about-sub-head about-sub-head-${theme}`}>
                            What I'm doing now
                        </p>


                        <ul className="ulist" >
                            <li className={`doing-list-data doing-list-data-${theme}`}>Working at Macco Tech as a Front End Developer</li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>Learning SASS</li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>Learning Node.js and Mongo DB</li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>Solving Leetcode problems</li>
                            {/* <li className={`doing-list-data doing-list-data-${theme}`}></li> */}

                        </ul>

                    </div>

                    <div className="contact-sec">
                        <p className={`about-sub-head about-sub-head-${theme}`}>
                            Softwares I use
                        </p>
                        <ul className="ulist">
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Coding :
                                </span> <span>

                                </span>
                                Visual Studio Code
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Clients :
                                </span> <span>

                                </span>
                                Google Maps, YouTube
                            </li>
                        </ul>
                    </div>
                    <div className="contact-sec">
                        <p className={`about-sub-head about-sub-head-${theme}`}>
                            Hardwares I use
                        </p>
                        <ul className="ulist">
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Laptop :
                                </span> <span>

                                </span>
                                Asus TUF Gaming FX505DY
                            </li>
                            {/* <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    CPU :
                                </span> <span>

                                </span>
                                AMD Ryzen 5 3550H
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    GPU :
                                </span> <span>

                                </span>
                                AMD Radeon Vega 8
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Storage :
                                </span> <span>

                                </span>
                                SSD NVMe M.2 512 GB
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Monitor :
                                </span> <span>

                                </span>
                                Viewsonic 22" LCD Monitor
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Keyboard :
                                </span> <span>

                                </span>
                                Portronics Bubble 2.0 Wireless Keyboard
                            </li>
                            <li className={`doing-list-data doing-list-data-${theme}`}>
                                <span className={`list-head list-head-${theme}`}>
                                    Mouse :
                                </span> <span>

                                </span>
                                TAG Gamerz WM800 Wireless Mouse
                            </li> */}


                        </ul>
                    </div>

                    <a href="/resume.pdf" download>
                        <div className={`resume-about-box resume-about-box-${theme}`}>
                            <p className={`rtext rtext-${theme}`}>
                                My Resume
                            </p>
                            {
                                theme === "light"
                                    ? <Image src={require("../projects/sharelight.png")} alt="" className="share" />
                                    : <Image src={require("../projects/share.png")} alt="" className="share" />
                            }
                        </div>
                    </a>

                </div>
            </div>
        </div >
    )
}

export default About