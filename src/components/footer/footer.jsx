import "../../app/globals.scss"

function Footer({ theme }) {
    return (
        <div className="footer">
            <div className="footer-box">
                {/* {
                    theme == "light"
                        ? <img src={require("../nav/logolight.png")} alt="Logo" className="fimg" />
                        : <img src={require("../nav/logo.png")} alt="Logo" className="fimg" />
                } */}
                <p className="madewith" >
                    Thank you!!
                </p>
                {/* <div className="footer-socials">
                    <a target="blank" href="https://linkedin.com/in/sahilkalkal">
                        <div className={`fsocial fsocial-${theme}`}>
                            <img src={require("./linkedin.png")} alt="LinkedIn" className="fsimg" />
                            <p className={`fstext fstext-${theme}`}>
                                LinkedIn
                            </p>
                        </div>
                    </a>
                    <a href="https://github.com/sahilkalkal9">
                        <div className={`fsocial fsocial-${theme}`}>
                            <img src={require("./github.png")} alt="LinkedIn" className="fsimg" />
                            <p className={`fstext fstext-${theme}`}>
                                GitHub
                            </p>
                        </div>
                    </a>

                </div> */}
            </div>
        </div>
    )
}

export default Footer