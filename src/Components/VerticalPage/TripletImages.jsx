import React from 'react';
import '../../Styles/TripletImages.scss';

const TripletImages = () => {
  return (
    <div className="triple-images">
      <div className="background-card">
        <img src="./background-1.png" alt="background-1" />
        <div className="image-text">
          <p>01</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="background-card">
        <img src="./background-2.png" alt="background-2" />{' '}
        <div className="image-text">
          <p>01</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="background-card">
        <img src="./background-3.png" alt="background-3" />
        <div className="image-text">
          <p>01</p>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

export default TripletImages;
