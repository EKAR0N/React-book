/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Viewer.module.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line no-unused-vars
const Viewer = ({ mediaType, url, loading }) => {
  return (
    <div className={cx('viewer')}>
      {mediaType === 'image' ? (
        <img
          onClick={() => window.open(url)}
          src={url}
          alt="space"
        /> /* {url} === props */
      ) : (
        <iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encryoted-media" allowFullScreen />
      )}
    </div>
  );
};

export default Viewer;
