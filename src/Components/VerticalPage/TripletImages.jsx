import React from 'react';
import '../../Styles/TripletImages.scss';

const TripletImages = () => {
  return (
    <section className="triple-images">
      <div className="top-text">
        <p className="bar-title">Lorem</p>
        <p className="bar-subTitle">subtitle</p>
      </div>
      <div className="background-card">
        <div className="shade"></div>
        <img src="./background-1.png" alt="background-1" />
        <article className="image-text">
          <p className="header-number">01</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </article>
      </div>
      <div className="background-card">
        <div className="shade"></div>
        <img src="./background-2.png" alt="background-2" />{' '}
        <article className="image-text">
          <p className="header-number">02</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </article>
      </div>
      <div className="background-card">
        <div className="shade"></div>
        <img src="./background-3.png" alt="background-3" />
        <article className="image-text">
          <p className="header-number">03</p>
          <p className="header-text">Lorem ipsum dolor sit</p>
          <p className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </article>
      </div>
    </section>
  );
};

export default TripletImages;
