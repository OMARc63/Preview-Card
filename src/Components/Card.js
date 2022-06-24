import React from "react";
import img from "../images/image-header-desktop.jpg";
import "./Card.css";

function Card() {
	return (
		<div className="Card">
      <div className="container">
        <div className="image">
          <img src={img}/>
        </div>
        <div className="preview">
          <h2 className="title">
            Get <span>insights</span> that help your business grow.
          </h2>
          <p>discover the benefits of data analytics and make better decisions regarding the revenue, customer experience, and the overall efficiency.</p>
          <div className="stats">
            <div className="stat">
              <h4>10K+</h4>
              <p>Companies</p>
            </div>
            <div className="stat">
              <h4>314</h4>
              <p>Templates</p>
            </div>
            <div className="stat">
              <h4>12M+</h4>
              <p>Queries</p>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}

export default Card;
