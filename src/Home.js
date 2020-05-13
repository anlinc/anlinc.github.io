import React from 'react';
import homebackground from './img/home-background.png';
import petalright from './img/petal-right.png';
import petalleft from './img/petal-left.png';
import './Home.css';
import browserbar from "./img/browserbar.png";
import browserbuttons from "./img/browser-buttons.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";
import mail from "./img/mail.png";
import github from "./img/github.png";
import browserimg from "./img/browser.png";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";

const petalLeft = {
    position: "absolute",
    top: '70%',
    left: '20%',
    width: "8%",
    height: "auto"
};

const petalRight = {
    position: "absolute",
    top: '62%',
    right: '20%',
    width: "8%",
    height: "auto"
};

const aboutBrowserContainer = {
    width: "85vw",
    height: "75vh",
    display: "inline-block",
    backgroundImage: `url(${browserimg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
};

const memoriesBrowserContainer = {
    width: "85vw",
    height: "75vh",
    display: "inline-block",
    backgroundColor: "#ffd9d9"
};

const aboutMeText = {
    position: "absolute",
    top: "55%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    fontSize: "24px"
};

const browserButtonsContainer = {
    position: "absolute",
    top: "55%",
    left: "10px",
    display: "inline-block",
    msTransform: "translate(0, -50%)",
    transform: "translate(0, -50%)",
    zIndex: "30"
};

const browserButtonsImg = {
    height: '20px',
    width: 'auto',
};

const iconRow = {
    display: "flex",
    zIndex: "40",
    position: "absolute",
    marginTop: "55px",
    left: "50%",
    msTransform: "translate(-50%, 0)",
    transform: "translate(-50%, 0)",
};

const iconCol = {
    float: "left",
    width: "70px",
    height: "70px",
    padding: "20px",
    zIndex: "50"
};

const textBlock = {
    display: "inline-block",
    position: 'relative',
    left: "10%",
    top: "35px",
    width: "80%",
    height: "auto",
    fontSize: "17px",
    textAlign: "center"
};

const browserBar = {
    width: "85vw",
    height: '40px'
};


const browserBarContainer = {
    position: "relative",
    display: "inline-block",
};

const fullBrowserContainer = {
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
};

const titleText = {
    position: "absolute",
    top: "55%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    fontSize: "24px"
};

const introText1 = "I'm a 4th year CS major @ the University of British Columbia currently looking for new grad opportunities." +
    " I'm (primarily) a backend developer, and have held internships at AppNeta, Intel, and NerdWallet." +
    " I am passionate, driven, and hard-working. I always seek to learn new skills and face challenges without fear.";
const introText3 = "In my spare time I like to draw (with mainly watercolor and ink), play the occasional video game, and rewatch Brooklyn 99." +
    " I am also really into manga and any form of dystopian sci-fi.";
const introText4 = "Reach out to me! I'd love to have a candid discussion about any of the above topics.";

const PageStyle = {
    height: '100vh',
    width: 'auto',
    position: 'relative'
};

function Home() {
    return (
        <div>
            {/* Beginning of Home */}
            <div className="Home"
                 style={{
                     backgroundImage: `url(${homebackground})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center center",
                     backgroundRepeat: "no-repeat",
                     height: '100vh',
                     width: "auto"
                 }}>
                <div className="hello-text" id="hellotext">
                    <div>Hi, I'm Anlin.</div>
                    <div>It's so nice to meet you.</div>
                </div>
                <img src={petalleft} alt={"sunflower-petals"} style={petalLeft} id="petals"/>
                <img src={petalright} alt={"sunflower-petals"} style={petalRight} id="petals"/>
            </div>
            {/* End of Home */}
            {/* Beginning of About */}
            <div className="About" id="About" style={PageStyle}>
                <div style={fullBrowserContainer}>
                    <div style={browserBarContainer}>
                        <img src={browserbar} alt="browser bar" style={browserBar}/>
                        <div style={aboutMeText}>
                            About Me
                        </div>
                        <div style={browserButtonsContainer}>
                            <img src={browserbuttons} alt={"browser buttons"} style={browserButtonsImg}
                                 id="browserbuttonsimg"/>
                        </div>
                    </div>
                    <div style={aboutBrowserContainer} className="browser">
                        <div style={textBlock} id="textblock">
                            <div>{introText1}</div>
                            <br/>
                            <div>In 2018, I co-founded <a color="#4e8ad4" target="_blank" rel="noopener noreferrer"
                                                          href="https://cmd-f.nwplus.io/">cmd-f</a>, British Columbia's
                                first all-female* hackathon, to advocate for more female*
                                representation in tech. As of 2020, it's grown to a size of 250+ hackers.
                            </div>
                            <br/>
                            <div>{introText3}</div>
                            <br/>
                            <div>{introText4}</div>
                            <div style={iconRow}>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.instagram.com/anlinpanda/?hl=en">
                                    <img src={insta} alt={"instagram"} style={iconCol} className="zoom"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.linkedin.com/in/anlin-chen">
                                    <img src={linkedin} alt={"linkedin"} style={iconCol} className="zoom"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:anlinc98@gmail.com">
                                    <img src={mail} alt={"email"} style={iconCol} className="zoom"/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/anlinc">
                                    <img src={github} alt={"github"} style={iconCol} className="zoom"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of About */}
            {/* Beginning of Memories */}
            <div className="Gallery" id="Gallery" style={PageStyle}>
                <div style={fullBrowserContainer}>
                    <div style={browserBarContainer}>
                        <img src={browserbar} alt="browser bar" style={browserBar}/>
                        <div style={titleText}>
                            Memories
                        </div>
                        <div style={browserButtonsContainer}>
                            <img src={browserbuttons} alt={"browser buttons"} style={browserButtonsImg}
                                 id="browserbuttonsimg"/>
                        </div>
                    </div>
                    <div style={memoriesBrowserContainer} className="browser">
                        <div className="imageContainer">
                            <div className="row">
                                <img src={img1} className="col" alt="cmd-f opening ceremonies"/>
                                <img src={img2} className="col" alt="nwhacks 2020 team"/>
                                <img src={img3} className="col" alt="hack4humanity 2019"/>
                                <img src={img4} className="col" alt="cmd-f 2020 team"/>
                                <img src={img5} className="col" alt="cmd-f 2019"/>
                                <img src={img6} className="col" alt="nwhacks 2019 pjs"/>
                                <img src={img7} className="col" alt="lhd 2018 team"/>
                                <img src={img8} className="col" alt="hackcon 2019"/>
                                <img src={img9} className="col" alt="hackcon 2019 team"/>
                                <img src={img10} className="col" alt="nwhacks 2019"/>
                                <img src={img11} className="col" alt="tofino surfing"/>
                                <img src={img12} className="col" alt="science world 2018"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Memories */}
        </div>
    );
}

export default Home;
