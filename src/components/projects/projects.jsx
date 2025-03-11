import Image from "next/image"
import "../../app/globals.scss"
import projects from "./project.json"

function Projects({ theme }) {
    return (
        <div className="projects">
            <p className={`page-head page-head-${theme}`}>
                Projects
            </p>
            <div className="projects-box">


               




                
                






                {
                    projects.map((p) => (
                        <div className={`project project-${theme}`}>
                            <div className="project-upper">
                                {/* <Image src={require(`./${p.image}`)} alt="" className="pimg" /> */}
                                <div className="phead">
                                    <p className="project-year">
                                        {p.year}
                                    </p>
                                    <p className="ptype">
                                        {p.type}
                                    </p>
                                </div>
                                {/* <Image src={require(`./${p.image}`)} alt="" className="pimgnew" /> */}
                                <p className={`project-name project-name-${theme}`}>
                                    {p.name}
                                    {/* <Image src={require("./share.png")} className="share pii" alt="" /> */}
                                </p>
                                <p className={`project-desc project-desc-${theme}`}>
                                    {p.desc}
                                </p>
                                <div className="tags">
                                    {
                                        p.tags.map((pt) => (
                                            <p className="tag">
                                                {pt}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="project-buttons">
                                <a href={p.demo} target="blank">
                                    <div className={`demo-box demo-box-${theme}`}>
                                        <p className={`project-button project-button-${theme}`}>
                                            Demo
                                        </p>
                                        {
                                            theme == "light"
                                                ? <Image src={require("./sharelight.png")} alt="" className="share" />
                                                : <Image src={require("./share.png")} alt="" className="share" />
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
                                                ? <Image src={require("./sharelight.png")} alt="" className="share" />
                                                : <Image src={require("./share.png")} alt="" className="share" />
                                        }
                                    </div>
                                </a>

                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Projects