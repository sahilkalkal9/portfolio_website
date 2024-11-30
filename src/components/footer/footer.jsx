import "../../App.scss"

function Footer({ theme }) {
    return (
        <div className="footer">
            <div className="footer-box">
                {
                    theme == "light"
                        ? <img src={require("../nav/logolight.png")} alt="Logo" className="fimg" />
                        : <img src={require("../nav/logo.png")} alt="Logo" className="fimg" />
                }
                <div className="footer-socials">
                    <div className={`fsocial fsocial-${theme}`}>
                        <img src={require("./linkedin.png")} alt="LinkedIn" className="fsimg" />
                        <p className={`fstext fstext-${theme}`}>
                            LinkedIn
                        </p>
                    </div>
                    <div className={`fsocial fsocial-${theme}`}>
                        <img src={require("./github.png")} alt="LinkedIn" className="fsimg" />
                        <p className={`fstext fstext-${theme}`}>
                            GitHub
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer