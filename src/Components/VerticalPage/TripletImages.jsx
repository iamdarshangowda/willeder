import React from 'react';
import '../../Styles/TripletImages.scss';

const TripletImages = () => {
  return (
    <div className="triple-images">
      <div className="top-text">
        <p className="bar-title">Lorem</p>
        <p className="bar-subTitle">subtitle</p>
      </div>
      <div className="background-card">
        <img src="./background-1.png" alt="background-1" />
        <div className="image-text">
          <p className="header-text">01</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="background-card">
        <img src="./background-2.png" alt="background-2" />{' '}
        <div className="image-text">
          <p className="header-text">02</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="background-card">
        <img src="./background-3.png" alt="background-3" />
        <div className="image-text">
          <p className="header-text">03</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripletImages;
