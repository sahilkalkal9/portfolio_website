import Image from "next/image";
import "../../app/globals.scss"


function Blogs({ theme }) {
    return (
        <div className="about">
            <div className="about-box">
                <p className={`page-head page-head-${theme}`}>
                    Blogs
                </p>

                <div className="about-desc">
                    {/* <p className={`about-text about-text-${theme}`} >
                        Welcome, here you can find my blogs sorted by year.
                    </p> */}

                    {/* <div className="yearB y2025">
                        <p className={`about-sub-head about-sub-head-${theme}`}>
                            2025
                        </p>

                        <div className="blogs">
                            <div className="blog">
                                <p className={`about-text bname about-text-${theme}`}>
                                    get() method in Firebase Firestore
                                </p>
                                <p className={`about-text bdate about-text-${theme}`} >21 Feb 2025</p>
                            </div>
                            <div className="blog">
                                <p className={`about-text bname about-text-${theme}`}>
                                    get() method in Firebase Firestore
                                </p>
                                <p className={`about-text bdate about-text-${theme}`} >21 Feb 2025</p>
                            </div>
                            <div className="blog">
                                <p className={`about-text bname about-text-${theme}`}>
                                    get() method in Firebase Firestore
                                </p>
                                <p className={`about-text bdate about-text-${theme}`} >21 Feb 2025</p>
                            </div>
                            <div className="blog">
                                <p className={`about-text bname about-text-${theme}`}>
                                    get() method in Firebase Firestore
                                </p>
                                <p className={`about-text bdate about-text-${theme}`} >21 Feb 2025</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="bear-box">
                        <Image src={require("./bear.png")} alt="" className="bear" />
                        <p className={`about-text bearText about-text-${theme}`} >Currently working on it, will post soon.</p>
                        <p className="blendText">
                            Hello world, how are you??
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blogs;