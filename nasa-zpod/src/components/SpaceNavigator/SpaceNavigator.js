/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames/bind';
import LeftIcon from 'react-icons/lib/md/chevron-left';
import RightIcon from 'react-icons/lib/md/chevron-right';
import styles from './SpaceNavigator.module.scss';

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => (
  <div className={cx('space-navigator')}>
    <div className={cx('left', 'end')}>
      <div className={cx('circle')} onClick={onPrev}>
        <LeftIcon />
      </div>
    </div>
    <div className={cx('right', 'end')}>
      <div className={cx('circle')} onClick={onNext}>
        <RightIcon />
      </div>
    </div>
  </div>
  );

export default SpaceNavigator;
