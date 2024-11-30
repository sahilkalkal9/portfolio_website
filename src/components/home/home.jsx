import { Link } from "react-router-dom"
import "../../App.scss"
import codingImg from "./himg.jpg"
import projects from "../projects/project.json"

function Home({ theme }) {
    return (
        <div className="home">
            <div className="home-box">
                <div className="home-box-left">
                    <p className={`head head-${theme}`}>
                        Hey, I am Sahil
                    </p>
                    <p className={`head-text head-text-${theme}`}>
                        I am a web developer who loves to build creative templates and efficient algorithms.
                    </p>
                    <p className={`head-text head-text-${theme}`}>
                        Welcome to my digital garden, here you can check out all <Link className="head-text-link" to='/projects' >my projects </Link>and <Link className="head-text-link" to='/about-me' >about me </Link>.
                    </p>

                    {/* <div className="socials">
                        <img src={require("./github.png")} alt="" className="social-img" />
                        <img src={require("./linkedin.png")} alt="" className="social-img" />
                        <img src={require("./mail.png")} alt="" className="social-img" />
                    </div> */}

                    <div className="home-buttons">
                        <Link to='/resume'>
                            <button className={`home-button home-button-${theme}`}>
                                Resume / CV
                            </button>
                        </Link>
                        <button className={`home-button home-button-${theme} hireme`}>
                            Hire Me
                        </button>
                    </div>





                </div>
                <img src={codingImg} alt="" className="home-img" />
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
                        Alongside my work as a web developer, I run a nonprofit animal rescue and awareness organization called Stray Farm. We don’t have a shelter, but we collaborate with other shelters to rescue and care for animals in need. We do what we can to protect stray animals, raise awareness about their needs, and encourage adoption.
                    </p>

                    <div className="sfsocials">
                        <a href="https://strayfarm.vercel.app" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./link.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Stray Farm
                                </p>
                            </div>
                        </a>
                        <a href="https://instagram.com/strayfarm" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./ig.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    Stray Farm
                                </p>
                            </div>
                        </a>
                        <a href="https://instagram.com/strayfarm_adoptions" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./ig.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    SF Adoptions
                                </p>
                            </div>
                        </a>
                        <a href="https://instagram.com/strayfarm_awareness" target="blank">
                            <div className={`sfsocial sfsocial-${theme}`}>
                                <img src={require("./ig.png")} alt="" className="sfsimg" />
                                <p className={`sfstext sfstext-${theme}`}>
                                    SF Awareness
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