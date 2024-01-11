import React from 'react';
import '../../styles/Banner.scss';

function Banner(props) {
  return (
    <div className={`BannerDiv ${props.page}`}>
      {props.page !== 'About' && (
        <div className="BannerTitle">
          Chez vous,
          {'\n'} partout et ailleurs
        </div>
      )}
    </div>
  );
}

export default Banner;
