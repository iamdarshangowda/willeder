import React from 'react';
import '../../Styles/VerticalPage.scss';
import TripletImages from './TripletImages';
import GreyContainer from './GreyContainer';

const VerticalPage = () => {
  return (
    <div className="vertical-container">
      <div className="vertical-bar">
        <div className="top-text">
          <p className="bar-title">Lorem</p>
          <p className="bar-subTitle">subtitle</p>
        </div>
      </div>
      <TripletImages />
      <GreyContainer />
    </div>
  );
};

export default VerticalPage;
