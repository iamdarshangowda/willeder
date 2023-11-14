import React from 'react';
import '../Styles/VerticalPage.scss';

const VerticalPage = () => {
  return (
    <div className="vertical-container">
      <div className="vertical-bar">
        <div className="top-text">
          <p className="bar-title">Lorem</p>
          <p className="bar-subTitle">subtitle</p>
        </div>
      </div>
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
    </div>
  );
};

export default VerticalPage;
