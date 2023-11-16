import React from 'react';
import '../../Styles/GreyContainer.scss';

const GreyContainer = () => {
  return (
    <section className="grey-container">
      <div className="grey-image-container">
        <img src="./Rectangle.png" alt="rectangleImage" />
      </div>
      <article className="grey-text-container">
        <h3>Lorem ipsum</h3>
        <div className="grey-mobile-image-container">
          <img src="./Rectangle.png" alt="rectangleImage" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto nisi beatae
          error aliquam eaque quis vel tempore officiis, obcaecati natus expedita sit et.
          Error quam quibusdam dignissimos vero molestias!
        </p>
        <div className="arrow-container">
          <p>Loren ipsum</p>
          <img src="./arrow.png" alt="rectangleImage" />
        </div>
      </article>
    </section>
  );
};

export default GreyContainer;
