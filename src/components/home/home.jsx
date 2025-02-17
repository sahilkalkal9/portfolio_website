import { Link } from "react-router-dom"
import "../../App.scss"
import codingImg from "./himg.jpg"
import projects from "../projects/project.json"
import { useEffect, useRef } from "react";

function Home({ theme }) {

    const homeRef = useRef(null);

    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         if (homeRef.current) {
    //             const rotateX = (event.clientY - window.innerHeight / 2) * 0.02;
    //             const rotateY = (event.clientX - window.innerWidth / 2) * -0.02;
    //             console.log(rotateX, rotateY);

    //             homeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    //         }
    //     };

    //     const handleMouseLeave = () => {
    //         if (homeRef.current) {
    //             homeRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    //         }
    //     };

    //     if (homeRef.current) {
    //         homeRef.current.addEventListener("mousemove", handleMouseMove);
    //         homeRef.current.addEventListener("mouseleave", handleMouseLeave);
    //     }

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         if (homeRef.current) {
    //             homeRef.current.removeEventListener("mousemove", handleMouseMove);
    //             homeRef.current.removeEventListener("mouseleave", handleMouseLeave);
    //         }
    //     };
    // }, []);

    return (
        <div className="home">
            <div ref={homeRef} id="homeBox" className="home-box">
                <div className="home-box-left">
                    <p className={`head head-${theme}`}>
                        Hey, I am Sahil
                    </p>

                    <p className={`head-text head-text-${theme}`}>
                        Sharing the journey of a self-taught developer, check out <Link className="head-text-link" to='/projects' >my projects </Link>and <Link className="head-text-link" to='/about-me' >about me </Link>.
                    </p>
                    <p className={`head-text head-text-${theme} skills-main skills-main-${theme}`}>
                        React JS | Google Firebase
                    </p>


                    {/* <div className="socials">
                        <img src={require("./github.png")} alt="" className="social-img" />
                        <img src={require("./linkedin.png")} alt="" className="social-img" />
                        <img src={require("./mail.png")} alt="" className="social-img" />
                    </div> */}

                    {/* <div className="home-buttons">
                        <Link to='/resume'>
                            <button className={`home-button home-button-${theme}`}>
                                Resume / CV
                            </button>
                        </Link>
                        <button className={`home-button home-button-${theme} hireme`}>
                            Hire Me
                        </button>
                    </div> */}

                </div>

                <div className="vsconh">
                    <div className="vscon">

                        <div className={`vscode-box vscode-box-${theme}`}>
                            <div className={`vscode vscode-${theme}`}>
                                <div className="vsdots">
                                    <div className="vscode-header">
                                        <div className="header-dot d1">

                                        </div>
                                        <div className="header-dot d2">

                                        </div>
                                        <div className="header-dot d3">

                                        </div>
                                    </div>
                                    <p className="hoverme">
                                        Hover me
                                    </p>
                                </div>


                                <div className="vscode-body">




                                    <div className="vsbody">
                                        <div className="vst vsc1">

                                        </div>
                                        <div className="vst vsst vsc2">

                                        </div>
                                        <div className="vst vsst vsc3">

                                        </div>
                                        <div className="vst vsc1">

                                        </div>
                                        <div className="vst vsc2 ">

                                        </div>
                                        <div className="vst vsst vsc3">

                                        </div>
                                        <div className="vst vsst vsc4">

                                        </div>
                                        <div className="vst">

                                        </div>
                                        <div className="vst ">

                                        </div>
                                        <div className="vst vsst">

                                        </div>
                                        <div className="vst vsst">

                                        </div>
                                        <div className="vst ">

                                        </div>
                                        <div className="vst  ">

                                        </div>
                                        <div className="vst vsst ">

                                        </div>
                                        <div className="vst vsst ">

                                        </div>
                                        <div className="vst ">

                                        </div>
                                        <div className="vst ">

                                        </div>
                                        <div className="vst vsst ">

                                        </div>
                                        {/* <div className="vst vsst ">

                                        </div>
                                        <div className="vst">

                                        </div> */}

                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="home-img">
                            <img src={codingImg} alt="" className="himg" />
                        </div>
                    </div>
                </div>





            </div>


            <div className="home-projects-box">
                <div className="phead">
                    <p className={`sub-head sub-head-${theme}`}>
                        Projects
                    </p>
                    <Link to='/projects'>
                        <button className={`allpro allpro-${theme}`}>
                            All Projects
                        </button>
                    </Link>
                </div>

                <div className="home-projects">
                    {
                        projects.slice(0, 4).map((p) => (
                            <div className={`project project-${theme}`}>
                                <div className="phead">
                                    <p className="project-year">
                                        {p.year}
                                    </p>
                                    <p className="ptype">
                                        {p.type}
                                    </p>
                                </div>
                                <img src={require(`../projects/${p.image}`)} alt="" className="pimgnew" />
                                <p className={`project-name project-name-${theme}`}>
                                    {p.name}
                                </p>
                                <p className="project-desc">
                                    {p.desc}
                                </p>
                                <div className="project-buttons">
                                    <a href={p.demo} target="blank">
                                        <div className={`demo-box demo-box-${theme}`}>
                                            <p className={`project-button project-button-${theme}`}>
                                                Demo
                                            </p>
                                            {
                                                theme == "light"
                                                    ? <img src={require("../projects/sharelight.png")} alt="" className="share" />
                                                    : <img src={require("../projects/share.png")} alt="" className="share" />
                                            }
                                        </div>
                                    </a>

                                    <a href={p.code} target="blank">
                                        <div className={`demo-box demo-box-${theme}`}>
                                            <p className={`project-button project-button-${theme}`}>
                                                Source
                                            </p>
                                            {
                                                theme == "light"
                                                    ? <img src={require("../projects/sharelight.png")} alt="" className="share" />
                                                    : <img src={require("../projects/share.png")} alt="" className="share" />
                                            }
                                        </div>
                                    </a>



                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>

            <div className="sf">
                <p className={`sub-head sub-head-${theme}`}>
                    Stray Farm
                </p>


                <div className="sfdesc">
                    <p className={`sft sft-${theme}`}>
                        Alongside my work as a web developer, I run a nonprofit animal rescue and awareness organization named Stray Farm. We don’t have a shelter, but we collaborate with other shelters to rescue and care for animals in need. We do what we can to protect stray animals, raise awareness about their needs, and encourage adoption.
                    </p>

                    <div className="sfsocials">
                        <a href="https://strayfarm.vercel.app" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./link.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Website
                                </p>
                            </div>
                        </a>
                        <a href="https://instagram.com/strayfarm" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./ig.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Instagram
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

            <div className="sf">
                <p className={`sub-head sub-head-${theme}`}>
                    Say Hello
                </p>


                <div className="sfdesc">
                    <p className={`sft sft-${theme}`}>
                        If you have any queries or you want to hire me, I am just a mail away. <br />Also, you can subscribe the newsletter for regular updates
                    </p>

                    <div className="sfsocials">
                        <a href="mailto:hello@sahilkalkal.com" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./mail.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Mail
                                </p>
                            </div>
                        </a>
                        <a href="https://sahilkalkal.substack.com/?r=1xrgjg&utm_campaign=pub-share-checklist" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./email.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Sign up the newsletter
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home