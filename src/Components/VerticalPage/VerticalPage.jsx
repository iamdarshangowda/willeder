import React from 'react';
import '../../Styles/VerticalPage.scss';
import TripletImages from './TripletImages';
import GreyContainer from './GreyContainer';

const VerticalPage = () => {
  return (
    <div className="vertical-container">
      <div className="vertical-bar"></div>
      <TripletImages />
      <GreyContainer />
    </div>
  );
};

export default VerticalPage;
