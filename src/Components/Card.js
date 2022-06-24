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
          <h1 className="title">
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and the overall efficiency.</p>
          <div className="stats">
            <div className="stat">
              <h2>10k+</h2>
              <p>Companies</p>
            </div>
            <div className="stat">
              <h2>314</h2>
              <p>Templates</p>
            </div>
            <div className="stat">
              <h2>12M+</h2>
              <p>Queries</p>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}

export default Card;
