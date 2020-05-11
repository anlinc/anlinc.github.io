import React from "react";
import "./Gallery.css"
import browserbar from "./img/browserbar.png";
import browserbuttons from "./img/browser-buttons.png";
import img1 from './img/cmd-f_speech.png';
import img2 from './img/nwhacks_group.png';
import img3 from './img/hack4humanity.png';
import img4 from './img/cmd-f_2020_group.png';
import img5 from './img/cmd-f_2019_me.png';
import img6 from './img/nwhacks_pjs.png';
import img7 from './img/lhd_group.png';
import img8 from './img/hackcon_me.png';
import img9 from './img/hackcon_group.png';
import img10 from './img/nwhacks_jess_me.png';
import img11 from './img/surf.png';
import img12 from './img/walle.png';

const PageStyle = {
    position: 'relative',
    height: "100vh",
    width: "auto"
};

const browserContainer = {
    width: "85vw",
    height: "75vh",
    display: "inline-block",
    backgroundColor: "#ffd9d9"
};

const titleText = {
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

function Gallery() {
    return (
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
                <div style={browserContainer} className="browser">
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
    );
}

export default Gallery;