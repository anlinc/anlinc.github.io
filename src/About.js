import React from 'react';
import './About.css';
import browserimg from './img/browser.png';
import browserbuttons from './img/browser-buttons.png';
import browserbar from './img/browserbar.png';
import insta from './img/insta.png';
import linkedin from './img/linkedin.png';
import mail from './img/mail.png';
import github from './img/github.png';

const PageStyle = {
    height: '100vh',
    width: 'auto',
    position: 'relative'
};

const browserContainer = {
    width: "85vw",
    height: "75vh",
    display: "inline-block",
    backgroundImage: `url(${browserimg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
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

const introText1 = "I'm a 4th year CS major @ the University of British Columbia currently looking for new grad opportunities." +
    " I'm (primarily) a backend developer, and have held internships at AppNeta, Intel, and NerdWallet." +
    " I am passionate, driven, and hard-working. I always seek to learn new skills and face challenges without fear.";
const introText3 = "In my spare time I like to draw (with mainly watercolor and ink), play the occasional video game, and rewatch Brooklyn 99." +
    " I am also really into manga and any form of dystopian sci-fi.";
const introText4 = "Reach out to me! I'd love to have a candid discussion about any of the above topics.";

function About() {
    return (
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
                <div style={browserContainer} className="browser">
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
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anlin-chen">
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
    );
}

export default About;
