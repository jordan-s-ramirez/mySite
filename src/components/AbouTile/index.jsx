import React from 'react';
import style from './about.module.less';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, textH5, alt, height, width, href,
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <a href={href || ''}>
          <img
            src={`../${img}`}
            height={height || 64}
            width={width || 64}
            alt={alt || ''}
          />
        </a>
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{textH3 || '' }</h3>
        <h4>{ textH4 || ''}</h4>
        <h5>{ textH5 || ''}</h5>
      </div>
    </div>
  );
};

export default AboutTile;
