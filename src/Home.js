import React from 'react';
import homebackground from './img/home-background.png';
import petalright from './img/petal-right.png';
import petalleft from './img/petal-left.png';
import './Home.css';

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

function Home() {
  return (
    <div className="Home"
         style={{ backgroundImage: `url(${homebackground})`,
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
  );
}

export default Home;
