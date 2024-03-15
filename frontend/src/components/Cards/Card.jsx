import React from "react";
import frame11Image from "../image/frame11.png"; // Import the image

import './Card.css'

function Card() {
    return (
        <div className="center-sections">
            <div className="small-section-container">
                <div className="small-section"> <h4>Rights</h4> </div><br />
                
                <div className="small-section2">
                    <h4> Expert Legal Advisory</h4></div>
            </div>
            <div className="right-section">
                <img src={frame11Image} alt="Image" /> {/* Use the imported image */}
            </div>
        </div>
    )
}

export default Card;
